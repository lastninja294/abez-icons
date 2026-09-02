import { useEffect, useRef, useState } from 'react';
import * as Icons from '@abez/icons';
import { CloseCircle, Code, Copy, DocumentDownload, TickCircle } from '@abez/icons';
import type { IconMeta } from '../lib/icons';
import { jsxSnippet, toPascalCase } from '../lib/icons';

const IconComponents = Icons as unknown as Record<
  string,
  React.ForwardRefExoticComponent<
    { size?: number | string } & React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>
  >
>;

const SIZES = [16, 20, 24, 32, 48];

interface DetailPanelProps {
  icon: IconMeta;
  onClose: () => void;
}

type CopyState = 'idle' | 'jsx' | 'svg' | 'name';
type Style = 'linear' | 'bold';

export default function DetailPanel({ icon, onClose }: DetailPanelProps) {
  const [previewSize, setPreviewSize] = useState(48);
  const [copied, setCopied] = useState<CopyState>('idle');
  const [style, setStyle] = useState<Style>(icon.boldOnly ? 'bold' : 'linear');
  const svgRef = useRef<SVGSVGElement>(null);

  const canToggleStyle = Boolean(icon.hasBold);
  const componentName =
    style === 'bold' && icon.boldName ? icon.boldName : toPascalCase(icon.name);
  const Comp = IconComponents[componentName];

  useEffect(() => {
    setPreviewSize(48);
    setCopied('idle');
    setStyle(icon.boldOnly ? 'bold' : 'linear');
  }, [icon.name, icon.boldOnly]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  function flashCopied(which: CopyState) {
    setCopied(which);
    window.setTimeout(() => setCopied('idle'), 1500);
  }

  function copyJsx() {
    navigator.clipboard?.writeText(jsxSnippet(componentName, previewSize));
    flashCopied('jsx');
  }

  function copySvg() {
    if (!svgRef.current) return;
    navigator.clipboard?.writeText(svgRef.current.outerHTML);
    flashCopied('svg');
  }

  function copyName() {
    navigator.clipboard?.writeText(componentName);
    flashCopied('name');
  }

  function downloadSvg() {
    if (!svgRef.current) return;
    const blob = new Blob([svgRef.current.outerHTML], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = style === 'bold' ? `${icon.name}-bold.svg` : `${icon.name}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <div className="panel-backdrop" onClick={onClose} />
      <aside className="panel">
        <button className="panel-close" onClick={onClose} aria-label="Close">
          <CloseCircle size={20} />
        </button>

        <div className="panel-preview">
          {Comp && <Comp ref={svgRef} size={previewSize} />}
        </div>

        <h2 className="panel-title">{icon.name}</h2>
        <span className="panel-category">{icon.category}</span>

        {(canToggleStyle || icon.boldOnly) && (
          <div className="panel-block">
            <span className="panel-label">Style</span>
            {canToggleStyle ? (
              <div className="size-row">
                <button
                  className={style === 'linear' ? 'size-btn active' : 'size-btn'}
                  onClick={() => setStyle('linear')}
                >
                  Linear
                </button>
                <button
                  className={style === 'bold' ? 'size-btn active' : 'size-btn'}
                  onClick={() => setStyle('bold')}
                >
                  Bold
                </button>
              </div>
            ) : (
              <span className="panel-category">Bold only — no linear source exported</span>
            )}
          </div>
        )}

        <div className="panel-block">
          <span className="panel-label">Size</span>
          <div className="size-row">
            {SIZES.map((s) => (
              <button
                key={s}
                className={previewSize === s ? 'size-btn active' : 'size-btn'}
                onClick={() => setPreviewSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="panel-block">
          <span className="panel-label">Use it</span>
          <pre className="code-block">
            <code>{jsxSnippet(componentName, previewSize)}</code>
          </pre>
        </div>

        <div className="panel-actions">
          <button className="action-btn" onClick={copyJsx}>
            {copied === 'jsx' ? <TickCircle size={16} /> : <Code size={16} />}
            {copied === 'jsx' ? 'Copied' : 'Copy JSX'}
          </button>
          <button className="action-btn" onClick={copySvg}>
            {copied === 'svg' ? <TickCircle size={16} /> : <Copy size={16} />}
            {copied === 'svg' ? 'Copied' : 'Copy SVG'}
          </button>
          <button className="action-btn" onClick={downloadSvg}>
            <DocumentDownload size={16} />
            Download
          </button>
        </div>

        <button className="panel-name-copy" onClick={copyName}>
          {componentName}
          <span className="panel-name-hint">{copied === 'name' ? 'copied' : 'click to copy'}</span>
        </button>
      </aside>
    </>
  );
}

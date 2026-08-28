export interface IconMeta {
  name: string;
  file: string;
  category: string;
}

// Mirrors scripts/generate-react.ts's naming so lookups match real package exports.
export function toPascalCase(kebab: string) {
  const pascal = kebab
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  return /^[0-9]/.test(pascal) ? `Icon${pascal}` : pascal;
}

export function jsxSnippet(componentName: string, size: number) {
  return `import { ${componentName} } from '@abez/icons';\n\n<${componentName} size={${size}} />`;
}

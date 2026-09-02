import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WindowsBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="m20.8 2.24-8 1.6c-.47.09-.8.5-.8.98V10c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V3.22c0-.63-.58-1.1-1.2-.98m0 19.52-8-1.6c-.47-.09-.8-.5-.8-.98V14c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v6.78c0 .63-.58 1.1-1.2.98M8.79 4.56l-6 1.27c-.46.1-.79.51-.79.98V10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5.53c0-.63-.59-1.11-1.21-.97m0 14.88-6-1.27c-.46-.1-.79-.51-.79-.98V14c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v4.47c0 .63-.59 1.11-1.21.97" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(WindowsBold);
export default ForwardRef;
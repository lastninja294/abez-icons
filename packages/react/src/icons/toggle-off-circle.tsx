import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ToggleOffCircle = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 4h4c4.42 0 8 3.58 8 8s-3.58 8-8 8h-4c-4.42 0-8-3.58-8-8s3.58-8 8-8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(ToggleOffCircle);
export default ForwardRef;
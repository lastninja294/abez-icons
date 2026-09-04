import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Arrow3 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.45 6.72 6.73 3 3.01 6.72M6.73 21V3m6.82 14.28L17.27 21l3.72-3.72M17.27 3v18" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Arrow3);
export default ForwardRef;
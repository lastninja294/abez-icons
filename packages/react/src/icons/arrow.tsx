import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Arrow = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22v-2m0-2v-2m0-2v-3c0-3.87 3.13-7 7-7h3M2 4h3c3.87 0 7 3.13 7 7v3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 2 2 4l2 2m16-4 2 2-2 2" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Arrow);
export default ForwardRef;
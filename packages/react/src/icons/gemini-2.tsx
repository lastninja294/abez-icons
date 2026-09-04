import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Gemini2 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22V3m3.3 2.3L12 2 8.7 5.3M5 7 3 5 1 7m22 0-2-2-2 2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6.04V11q0 6 6 6h6q6 0 6-6V6.04M9 20h6" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Gemini2);
export default ForwardRef;
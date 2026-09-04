import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GlobalSearch = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 3h1a28.42 28.42 0 0 0 0 18H8m7-18c.97 2.92 1.46 5.96 1.46 9" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16v-1c2.92.97 5.96 1.46 9 1.46M3 9a28.42 28.42 0 0 1 18 0m-2.8 12.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4m3.8.6-1-1" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(GlobalSearch);
export default ForwardRef;
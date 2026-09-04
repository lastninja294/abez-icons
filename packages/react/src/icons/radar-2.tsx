import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Radar2 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M6 4c1.67-1.25 3.75-2 6-2 5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12c0-1.81.48-3.51 1.33-4.98L12 12" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M6.83 8.96A5.9 5.9 0 0 0 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6-2.69-6-6-6c-.91 0-1.78.2-2.55.57" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Radar2);
export default ForwardRef;
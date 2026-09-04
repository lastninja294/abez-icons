import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const InfoCircle = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10m0-14v5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.995 16h.009" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(InfoCircle);
export default ForwardRef;
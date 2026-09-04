import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CalendarCircle = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M9.89 5.83v2m4.22-2v2m-6.58 2.31h8.94" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M13.5 17.67h-3c-2.5 0-4-1.8-4-4v-3c0-2.2 1.5-4 4-4h3c2.5 0 4 1.8 4 4v3c0 2.2-1.5 4-4 4" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(CalendarCircle);
export default ForwardRef;
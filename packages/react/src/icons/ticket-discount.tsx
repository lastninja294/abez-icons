import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TicketDiscount = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12.5A2.5 2.5 0 0 1 22 10V9c0-4-1-5-5-5H7C3 4 2 5 2 9v.5a2.5 2.5 0 0 1 0 5v.5c0 4 1 5 5 5h10c4 0 5-1 5-5a2.5 2.5 0 0 1-2.5-2.5M9 14.75l6-6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.995 14.75h.009m-6.009-5.5h.008" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(TicketDiscount);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DiscountCircle = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-3-7 6-6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.495 14.5h.009m-5.009-5h.008" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(DiscountCircle);
export default ForwardRef;
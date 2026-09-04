import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Money4 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6M8.5 6H7a2.5 2.5 0 0 0-2.5 2.5V10m11-4H17a2.5 2.5 0 0 1 2.5 2.5V10m-11 8H7a2.5 2.5 0 0 1-2.5-2.5V14m11 4H17a2.5 2.5 0 0 0 2.5-2.5V14" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Money4);
export default ForwardRef;
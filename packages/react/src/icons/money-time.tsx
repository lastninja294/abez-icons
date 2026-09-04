import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MoneyTime = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m6.5-5v5M5 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M5.25 16.75v.93c0 .35-.18.68-.49.86L4 19" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M2 15.2V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v6c0 3.5-2 5-5 5H8.5" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(MoneyTime);
export default ForwardRef;
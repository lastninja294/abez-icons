import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Xiaomi = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M7.5 15V9h4c1.1 0 2 .9 2 2v4m-3 0v-3m6 3V9" /><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Xiaomi);
export default ForwardRef;
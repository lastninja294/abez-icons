import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Undo = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M7.13 18.31h8c2.76 0 5-2.24 5-5s-2.24-5-5-5h-11" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.43 10.81 3.87 8.25l2.56-2.56" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Undo);
export default ForwardRef;
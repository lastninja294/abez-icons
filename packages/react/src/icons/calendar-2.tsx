import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Calendar2 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M8 2v3m8-3v3M3.5 9.09h17m.5-.59V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.996 13.7h.008m-3.71 0h.01m-.01 3h.01" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Calendar2);
export default ForwardRef;
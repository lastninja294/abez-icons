import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Stickynote = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M8 2v3m8-3v3m-9 6h8m-8 4h5m3 7H9c-5 0-6-2.06-6-6.18V9.65c0-4.7 1.67-5.96 5-6.15h8c3.33.18 5 1.45 5 6.15V16" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 16-6 6v-3q0-3 3-3z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Stickynote);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Xd = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M18 8.5v7.1h-1.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8H18M6 8.5l5.7 7m0-7-5.7 7" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Xd);
export default ForwardRef;
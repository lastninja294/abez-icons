import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Vuesax = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m21 8-9 14L2.96 8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M3 4h3l6 9 6-9h3l-9 14z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m8 3 4 6 4-6-2.8 1V2h-2.4v2z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Vuesax);
export default ForwardRef;
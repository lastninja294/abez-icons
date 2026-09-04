import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SunFog = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.5 12a6.5 6.5 0 1 0-13 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4.99 4.99-.13-.13m14.15.13.13-.13zM12 2.08V2zM2.08 12H2zM22 12h-.08z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M4 15h16M6 18h12m-9 3h6" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(SunFog);
export default ForwardRef;
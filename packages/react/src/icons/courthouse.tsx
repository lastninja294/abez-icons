import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Courthouse = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M2 22h20M12 2c1.6.64 3.4.64 5 0v3c-1.6.64-3.4.64-5 0zm0 3v3m5 0H7q-3 0-3 3v11h16V11q0-3-3-3M4.58 12h14.84" /><path stroke="currentColor" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M7.99 12v10m4-10v10m4-10v10" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Courthouse);
export default ForwardRef;
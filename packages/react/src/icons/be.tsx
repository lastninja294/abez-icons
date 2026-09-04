import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Be = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="M2 12h7c1.7 0 3 1.3 3 3s-1.3 3-3 3H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h5c1.7 0 3 1.3 3 3s-1.3 3-3 3z" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M14 14h8c0-2.2-1.8-4-4-4s-4 1.8-4 4m0 0c0 2.2 1.8 4 4 4h1.7m-.2-10.5h-3" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Be);
export default ForwardRef;
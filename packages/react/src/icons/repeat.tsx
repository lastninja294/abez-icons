import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Repeat = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M3.58 5.16h13.84c1.66 0 3 1.34 3 3v3.32" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M6.74 2 3.58 5.16l3.16 3.16m13.68 10.52H6.58c-1.66 0-3-1.34-3-3v-3.32" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m17.26 22 3.16-3.16-3.16-3.16" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Repeat);
export default ForwardRef;
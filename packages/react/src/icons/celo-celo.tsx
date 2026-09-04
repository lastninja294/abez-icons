import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CeloCelo = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" /><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="M9 22A7 7 0 1 0 9 8a7 7 0 0 0 0 14Z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(CeloCelo);
export default ForwardRef;
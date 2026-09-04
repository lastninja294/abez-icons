import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const OkbOkb = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M17 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0-10a5 5 0 1 0 0-10 5 5 0 0 0 0 10" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M7 17A5 5 0 1 0 7 7a5 5 0 0 0 0 10" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(OkbOkb);
export default ForwardRef;
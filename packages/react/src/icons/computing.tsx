import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Computing = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7M19.72 3.25 3.27 19.7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M16.06 18v-5m2.44 2.5h-5m-3-8h-5" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Computing);
export default ForwardRef;
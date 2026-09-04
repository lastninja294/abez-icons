import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Lock = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 10V8c0-3.31 1-6 6-6s6 2.69 6 6v2m-1 12H7c-4 0-5-1-5-5v-2c0-4 1-5 5-5h10c4 0 5 1 5 5v2c0 4-1 5-5 5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.997 16h.008m-4.009 0h.008m-4.009 0h.008" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Lock);
export default ForwardRef;
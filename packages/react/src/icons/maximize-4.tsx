import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Maximize4 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 9V3h-6M3 15v6h6M21 3l-7.5 7.5m-3 3L3 21" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Maximize4);
export default ForwardRef;
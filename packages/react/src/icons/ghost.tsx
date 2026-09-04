import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Ghost = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 20.07v-7.89C22 6.58 17.5 2 12 2S2 6.58 2 12.18v7.89c0 1.26.75 1.6 1.67.76l1-.91c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l1 .91c.88.84 1.63.5 1.63-.76" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14a6.66 6.66 0 0 0 8 0m-4-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Ghost);
export default ForwardRef;
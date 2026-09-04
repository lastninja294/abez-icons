import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const QuoteDown = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58h3.22c1.42 0 2.58 1.16 2.58 2.58zm0 0c0 6.05-1.13 7.05-4.53 9.07m-7.1-9.07h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58H7.8c1.42 0 2.58 1.16 2.58 2.58v5.8m-.01 0c0 6.05-1.13 7.05-4.53 9.07" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(QuoteDown);
export default ForwardRef;
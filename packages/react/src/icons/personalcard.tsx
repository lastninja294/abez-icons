import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Personalcard = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 21H7c-4 0-5-1-5-5V8c0-4 1-5 5-5h10c4 0 5 1 5 5v8c0 4-1 5-5 5M14 8h5m-4 4h4m-2 4h2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.5 11.29a1.81 1.81 0 1 0 0-3.62 1.81 1.81 0 0 0 0 3.62m3.5 5.04a3.02 3.02 0 0 0-2.74-2.72 7.7 7.7 0 0 0-1.52 0A3.03 3.03 0 0 0 5 16.33" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Personalcard);
export default ForwardRef;
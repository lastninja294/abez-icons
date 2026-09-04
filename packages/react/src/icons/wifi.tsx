import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Wifi = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.91 11.84c4.3-3.32 9.89-3.32 14.19 0M2 8.36c6.06-4.68 13.94-4.68 20 0M6.79 15.49c3.15-2.44 7.26-2.44 10.41 0m-7.8 3.66c1.58-1.22 3.63-1.22 5.21 0" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Wifi);
export default ForwardRef;
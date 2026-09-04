import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Scan = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9m6 0h2.5C19.99 2 22 4.01 22 6.5V9m0 7v1.5c0 2.49-2.01 4.5-4.5 4.5H16m-7 0H6.5C4.01 22 2 19.99 2 17.5V15m15-5.5v5q0 3-3 3h-4q-3 0-3-3v-5q0-3 3-3h4q3 0 3 3m2 2.5H5" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Scan);
export default ForwardRef;
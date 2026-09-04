import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Forward5Seconds = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.98 4.47 12 2m7.09 5.8c1.11 1.48 1.8 3.31 1.8 5.31A8.89 8.89 0 0 1 12 22a8.89 8.89 0 0 1-8.89-8.89A8.89 8.89 0 0 1 12 4.22c.68 0 1.34.09 1.98.24" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.91 10.83h-3.06l-.76 2.29h2.29a1.53 1.53 0 0 1 0 3.06h-2.29" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Forward5Seconds);
export default ForwardRef;
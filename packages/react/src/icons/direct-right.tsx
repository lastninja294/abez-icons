import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DirectRight = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.29 9.17 7.7 3.07C4.95 1.62 1.96 4.55 3.35 7.33l1.62 3.24c.45.9.45 1.96 0 2.86l-1.62 3.24c-1.39 2.78 1.6 5.7 4.35 4.26l11.59-6.1c2.28-1.2 2.28-4.46 0-5.66" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(DirectRight);
export default ForwardRef;
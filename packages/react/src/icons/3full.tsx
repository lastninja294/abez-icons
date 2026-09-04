import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Icon3full = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M6.38 10c.33 1.31.33 2.69 0 4m3.5-4c.33 1.31.33 2.69 0 4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 19H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5h6c4 0 5 1 5 5v4c0 4-1 5-5 5" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Icon3full);
export default ForwardRef;
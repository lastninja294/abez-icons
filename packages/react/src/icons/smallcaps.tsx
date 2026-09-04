import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Smallcaps = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M1.99 5.93V4.42c0-1.02.83-1.85 1.85-1.85h12.92c1.02 0 1.85.83 1.85 1.85v1.51M10.3 18.1V3.32M6.9 18.1h5.58m1.2-7.76h7.01c.73 0 1.32.59 1.32 1.32v.8m-5.93 8.97V10.87m-2.14 10.56h4.28" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Smallcaps);
export default ForwardRef;
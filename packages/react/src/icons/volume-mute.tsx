import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VolumeMute = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={1.5} d="M5.5 10v4q0 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.41c0-2.98-2.07-4.12-4.59-2.54L10.99 6.7c-.32.19-.69.3-1.06.3H8.5q-3 0-3 3Z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(VolumeMute);
export default ForwardRef;
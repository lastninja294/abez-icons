import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AndroidBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11 18v3c0 .55-.45 1-1 1s-1-.45-1-1v-3zm4 0v3c0 .55-.45 1-1 1s-1-.45-1-1v-3zm2-7v5c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2M5 11v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1m16 0v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1M9.6 7.6h4.8c.88 0 1.6-.72 1.6-1.6 0-2.21-1.79-4-4-4S8 3.79 8 6c0 .88.72 1.6 1.6 1.6" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(AndroidBold);
export default ForwardRef;
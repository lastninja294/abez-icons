import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowSwapHorizontal = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m20.5 14.99-5.01 5.02M3.5 14.99h17m-17-5.98 5.01-5.02M20.5 9.01h-17" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(ArrowSwapHorizontal);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CeloCeloBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9 22A7 7 0 1 0 9 8a7 7 0 0 0 0 14" /><path fill="currentColor" d="M22 9a6.97 6.97 0 0 1-3.86 6.25c-.31.16-.66-.09-.69-.43a8.96 8.96 0 0 0-8.27-8.27c-.35-.03-.59-.38-.43-.69A6.97 6.97 0 0 1 15 2c3.87 0 7 3.13 7 7" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(CeloCeloBold);
export default ForwardRef;
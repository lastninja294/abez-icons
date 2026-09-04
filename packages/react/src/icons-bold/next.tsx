import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const NextBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M3.76 7.22v9.57c0 1.96 2.13 3.19 3.83 2.21l4.15-2.39 4.15-2.4c1.7-.98 1.7-3.43 0-4.41l-4.15-2.4-4.15-2.39c-1.7-.98-3.83.24-3.83 2.21m16.48 11.71c-.41 0-.75-.34-.75-.75V5.82c0-.41.34-.75.75-.75s.75.34.75.75v12.36c0 .41-.33.75-.75.75" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(NextBold);
export default ForwardRef;
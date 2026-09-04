import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Grid6Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M22 7.75H9.75v-5.8h6.44c3.64 0 5.81 2.17 5.81 5.8m0 8.5c-.05 3.57-2.21 5.7-5.81 5.7H9.75v-5.7zM8.25 1.95v20h-.44C4.17 21.95 2 19.78 2 16.14V7.76c0-3.64 2.17-5.81 5.81-5.81zM22 9.25H9.75v5.5H22z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Grid6Bold);
export default ForwardRef;
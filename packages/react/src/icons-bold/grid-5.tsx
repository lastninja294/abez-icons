import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Grid5Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8.25 2v20h-.44C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2zM22 7.81v3.44H9.75V2h6.44C19.83 2 22 4.17 22 7.81m0 4.94v3.44c0 3.64-2.17 5.81-5.81 5.81H9.75v-9.25z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Grid5Bold);
export default ForwardRef;
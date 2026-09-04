import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ForwardBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.83 3.17-1.83.49-.28v-2.82l-.49-.28L8.1 8.48 4.93 6.65C3.63 5.9 2 6.84 2 8.34m9.76 0v7.32c0 1.5 1.63 2.44 2.92 1.69l3.18-1.83 3.17-1.83c1.29-.75 1.29-2.63 0-3.38l-3.17-1.83-3.18-1.83c-1.29-.75-2.92.19-2.92 1.69" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(ForwardBold);
export default ForwardRef;
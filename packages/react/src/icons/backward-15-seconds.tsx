import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Backward15Seconds = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.96 10.83H12.9l-.76 2.29h2.29a1.53 1.53 0 1 1 0 3.06h-2.29m-2.6-.01v-5.34l-1.5 1.67m1.98-8.03L12 2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.91 7.8c-1.11 1.48-1.8 3.31-1.8 5.31A8.89 8.89 0 0 0 12 22a8.89 8.89 0 0 0 8.89-8.89A8.89 8.89 0 0 0 12 4.22c-.68 0-1.34.09-1.98.24" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Backward15Seconds);
export default ForwardRef;
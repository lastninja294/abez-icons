import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LockCircle = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11v-1c0-1.66.5-3 3-3s3 1.34 3 3v1m-3 3.6a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.5 17h-5c-2 0-2.5-.5-2.5-2.5v-1c0-2 .5-2.5 2.5-2.5h5c2 0 2.5.5 2.5 2.5v1c0 2-.5 2.5-2.5 2.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(LockCircle);
export default ForwardRef;
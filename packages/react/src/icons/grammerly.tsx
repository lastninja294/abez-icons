import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Grammerly = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.07 4.95c3.97 3.97 3.9 10.45-.2 14.34-3.79 3.59-9.94 3.59-13.74 0C1.02 15.4.95 8.92 4.93 4.95c3.9-3.91 10.24-3.91 14.14 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.84 16.07c-2.12 2-5.56 2-7.67 0" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Grammerly);
export default ForwardRef;
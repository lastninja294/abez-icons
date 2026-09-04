import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Task = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 19.5h10m-10-7h10m-10-7h10m-18 0 1 1 3-3m-4 9 1 1 3-3m-4 9 1 1 3-3" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Task);
export default ForwardRef;
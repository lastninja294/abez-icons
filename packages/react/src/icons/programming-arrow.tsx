import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ProgrammingArrow = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 16V6.5c0-1.1-.9-2-2-2h-4.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m15 2-3 2.5L15 7M5 9v7m.25-7.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5M5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6m14 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(ProgrammingArrow);
export default ForwardRef;
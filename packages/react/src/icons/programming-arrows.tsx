import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ProgrammingArrows = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 16V6.5c0-1.1-.9-2-2-2h-5.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m14 2-3 2.5L14 7m5 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6M5 8v9.5c0 1.1.9 2 2 2h5.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m10 22 3-2.5-3-2.5M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(ProgrammingArrows);
export default ForwardRef;
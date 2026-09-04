import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TextUnderline = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 21h14M5 3v7c0 3.87 3.13 7 7 7s7-3.13 7-7V3" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(TextUnderline);
export default ForwardRef;
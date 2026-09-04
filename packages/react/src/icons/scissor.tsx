import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Scissor = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m0 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M22 6 8.65 15.98M22 17.97 8.65 7.98" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Scissor);
export default ForwardRef;
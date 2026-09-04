import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Cd = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 22 22" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 21.233c5.651 0 10.233-4.582 10.233-10.233S16.65.767 11 .767.767 5.35.767 11 5.35 21.233 11 21.233" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 13.047a2.046 2.046 0 1 0 0-4.093 2.046 2.046 0 0 0 0 4.092" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Cd);
export default ForwardRef;
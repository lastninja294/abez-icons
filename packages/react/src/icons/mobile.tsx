import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Mobile = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 18 22" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.14 5.884v10.232c0 4.093-1.024 5.117-5.117 5.117h-6.14c-4.092 0-5.116-1.024-5.116-5.117V5.884C.767 1.79 1.791.767 5.884.767h6.14c4.092 0 5.116 1.024 5.116 5.117" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.535} d="M11 4.349H6.907" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.954 18.265a1.586 1.586 0 1 0 0-3.172 1.586 1.586 0 0 0 0 3.172" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Mobile);
export default ForwardRef;
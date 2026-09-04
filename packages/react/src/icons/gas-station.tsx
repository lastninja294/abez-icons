import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GasStation = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.5 22V5c0-2 1.34-3 3-3h8c1.66 0 3 1 3 3v17zM2 22h17" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.39 10h4.23c1.04 0 1.89-.5 1.89-1.89V6.88c0-1.39-.85-1.89-1.89-1.89H8.39c-1.04 0-1.89.5-1.89 1.89v1.23C6.5 9.5 7.35 10 8.39 10M6.5 13h3m8 3.01L22 16v-6l-2-1" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(GasStation);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Frame = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.47 13.26 12 9.74l3.53 3.52" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Frame);
export default ForwardRef;
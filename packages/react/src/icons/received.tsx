import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Received = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m5 17.5 14-14M5 7.23V17.5h10.27M3.5 22h17" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Received);
export default ForwardRef;
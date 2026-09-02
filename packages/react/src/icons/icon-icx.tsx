import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const IconIcx = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={3} d="M20.2 3.8h.1M3.7 20.2h.1" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M15.6 6c-1.1-.6-2.3-1-3.6-1-3.9 0-7 3.1-7 7 0 1.3.4 2.6 1 3.7M8.3 18c1.1.7 2.3 1 3.7 1 3.9 0 7-3.1 7-7 0-1.3-.4-2.6-1-3.7" /></svg>;
const ForwardRef = forwardRef(IconIcx);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TheGraphGrt = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="M11.3 14a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m15.1 14.8-3 3M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /></svg>;
const ForwardRef = forwardRef(TheGraphGrt);
export default ForwardRef;
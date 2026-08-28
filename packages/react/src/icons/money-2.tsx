import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Money2 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6M2 9h1c3 0 4-1 4-4V4m15 5h-1c-3 0-4-1-4-4V4M2 15h1c3 0 4 1 4 4v1m15-5h-1c-3 0-4 1-4 4v1" /></svg>;
const ForwardRef = forwardRef(Money2);
export default ForwardRef;
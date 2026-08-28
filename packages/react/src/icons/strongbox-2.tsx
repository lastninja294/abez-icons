import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Strongbox2 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 19h8q3 0 3-3V8q0-3-3-3H8Q5 5 5 8v8q0 3 3 3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 9.5h2.48a2.5 2.5 0 0 1 0 5H5m14-4.51h-3M19 14h-3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} d="M7.2 12h.1" /></svg>;
const ForwardRef = forwardRef(Strongbox2);
export default ForwardRef;
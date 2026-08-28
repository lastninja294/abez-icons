import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Buliding = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M2 22h20M17 2H7C4 2 3 3.79 3 6v16h18V6c0-2.21-1-4-4-4M7 16.5h3m4 0h3M7 12h3m4 0h3M7 7.5h3m4 0h3" /></svg>;
const ForwardRef = forwardRef(Buliding);
export default ForwardRef;
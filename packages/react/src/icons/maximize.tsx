import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Maximize = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7m9-16L6 18" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 10V6h-4m-8 8v4h4M6 6l12 12M6 10V6h4m8 8v4h-4" /></svg>;
const ForwardRef = forwardRef(Maximize);
export default ForwardRef;
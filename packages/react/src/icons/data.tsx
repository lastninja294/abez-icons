import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Data = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2-2h12" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 4h-4q-3 0-3 3v10q0 3 3 3h4" /></svg>;
const ForwardRef = forwardRef(Data);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LocationSlash = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.42 13a3.11 3.11 0 0 1-1.54-2.69 3.118 3.118 0 0 1 5.81-1.57" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.99 17.81c-1.84-2.51-3.18-5.72-2.36-9.32C5.28 1.23 14.57.06 18.68 4.98m1.7 3.52c1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0M22 2 2 22" /></svg>;
const ForwardRef = forwardRef(LocationSlash);
export default ForwardRef;
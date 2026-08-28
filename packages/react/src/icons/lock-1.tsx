import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Lock1 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 10V8c0-3.31 1-6 6-6s6 2.69 6 6v2m-6 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 22H7c-4 0-5-1-5-5v-2c0-4 1-5 5-5h10c4 0 5 1 5 5v2c0 4-1 5-5 5" /></svg>;
const ForwardRef = forwardRef(Lock1);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Hierarchy = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 9v7m.25-7.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5M5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6m14 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.13 9a4.06 4.06 0 0 0 3.94 3.04l3.43-.01a5.99 5.99 0 0 1 5.67 4.01" /></svg>;
const ForwardRef = forwardRef(Hierarchy);
export default ForwardRef;
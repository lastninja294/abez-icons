import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Slider = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 22H9c-2.5 0-4-1.8-4-4V6c0-2.2 1.5-4 4-4h6c2.5 0 4 1.8 4 4v12c0 2.2-1.5 4-4 4M5 16.01h14M2 4v16M22 4v16" /></svg>;
const ForwardRef = forwardRef(Slider);
export default ForwardRef;
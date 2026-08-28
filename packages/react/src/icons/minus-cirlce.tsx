import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MinusCirlce = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.92 22c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10m-4-10h8" /></svg>;
const ForwardRef = forwardRef(MinusCirlce);
export default ForwardRef;
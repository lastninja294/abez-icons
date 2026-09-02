import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SendRotate = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M18.743 4.932 4.933 18.742M18.743 15.063V4.933H8.612" /></svg>;
const ForwardRef = forwardRef(SendRotate);
export default ForwardRef;
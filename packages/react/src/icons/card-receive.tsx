import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CardReceive = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M2 8.5h12.5m-8.5 8h2m2.5 0h4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 14.03v2.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h8.06m5.5 0v6l2-2m-2 2-2-2" /></svg>;
const ForwardRef = forwardRef(CardReceive);
export default ForwardRef;
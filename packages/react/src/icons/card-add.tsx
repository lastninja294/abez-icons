import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CardAdd = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M2 8.5h11.5m-7.5 8h2m2.5 0h4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 12.03v4.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h7.06" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M16.5 6.25H22M19.25 9V3.5" /></svg>;
const ForwardRef = forwardRef(CardAdd);
export default ForwardRef;
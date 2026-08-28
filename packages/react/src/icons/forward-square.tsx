import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ForwardSquare = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M15 15.38h-4.92C8.38 15.38 7 14 7 12.3s1.38-3.08 3.08-3.08h6.77" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.43 10.77 17 9.19l-1.57-1.57" /></svg>;
const ForwardRef = forwardRef(ForwardSquare);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Note1 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M8 2v3m8-3v3m-9 8h8m-8 4h5m4-13.5c3.33.18 5 1.45 5 6.15v6.18c0 4.12-1 6.18-6 6.18H9c-5 0-6-2.06-6-6.18V9.65c0-4.7 1.67-5.96 5-6.15z" /></svg>;
const ForwardRef = forwardRef(Note1);
export default ForwardRef;
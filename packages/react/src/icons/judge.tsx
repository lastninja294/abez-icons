import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Judge = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m20.01 18.51-4.95-4.95m0 0-3.54 3.54c-.78.78-2.05.78-2.83 0l-4.24-4.24c-.78-.78-.78-2.05 0-2.83l7.07-7.07c.78-.78 2.05-.78 2.83 0l4.24 4.24c.78.78.78 2.05 0 2.83zM2 21h6M6.56 7.92l7.07 7.07" /></svg>;
const ForwardRef = forwardRef(Judge);
export default ForwardRef;
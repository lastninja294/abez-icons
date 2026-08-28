import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Setting4 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M22 6.5h-6m-10 0H2m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m12 7.5h-4m-10 0H2M14 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" /></svg>;
const ForwardRef = forwardRef(Setting4);
export default ForwardRef;
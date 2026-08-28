import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Send = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M3.5 22h17M5 3.5l14 14M5 13.77V3.5h10.27" /></svg>;
const ForwardRef = forwardRef(Send);
export default ForwardRef;
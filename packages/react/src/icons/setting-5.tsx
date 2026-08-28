import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Setting5 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M19 22V11m0-4V2m-7 20v-5m0-4V2M5 22V11m0-4V2m-2 9h4m10 0h4m-11 2h4" /></svg>;
const ForwardRef = forwardRef(Setting5);
export default ForwardRef;
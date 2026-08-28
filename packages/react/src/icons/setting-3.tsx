import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Setting3 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M15.57 18.5v-3.9m0-7.15V5.5m0 7.15a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2M8.43 18.5v-1.95m0-7.15V5.5m0 11.05a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2" /></svg>;
const ForwardRef = forwardRef(Setting3);
export default ForwardRef;
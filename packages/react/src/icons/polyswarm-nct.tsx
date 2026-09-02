import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PolyswarmNct = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M9.5 3.2h5c3.8 0 7 3.1 7 7 0 3.8-3.1 7-7 7h-11" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M3.2 6.8h10.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H8m.5-3.4h-3m1 10h-4" /></svg>;
const ForwardRef = forwardRef(PolyswarmNct);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SiacoinSc = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M8 2.8c1.2-.5 2.6-.8 4-.8 5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12c0-1.4.3-2.8.8-4" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M16 16.2V12c0-2.3-1.9-4.2-4.2-4.2S7.6 9.7 7.6 12s1.9 4.2 4.2 4.2zM5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" /></svg>;
const ForwardRef = forwardRef(SiacoinSc);
export default ForwardRef;
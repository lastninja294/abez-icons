import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AugurRep = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m9 11 2.5-5h1l2.5 5m-7 2-1 2 5 3 5-3-1-2" /></svg>;
const ForwardRef = forwardRef(AugurRep);
export default ForwardRef;
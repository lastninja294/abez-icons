import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EnjinCoinEnj = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M15.8 8h-5c-1.6 0-3 1.4-3 3v2c0 1.6 1.4 3 3 3h5m0-4h-8" /></svg>;
const ForwardRef = forwardRef(EnjinCoinEnj);
export default ForwardRef;
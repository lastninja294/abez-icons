import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DaiDai = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M8 7v10h4c2.8 0 5-2.2 5-5s-2.2-5-5-5zm-1.5 3h12m-12 4h12" /></svg>;
const ForwardRef = forwardRef(DaiDai);
export default ForwardRef;
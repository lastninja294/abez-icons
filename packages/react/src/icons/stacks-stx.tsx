import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const StacksStx = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M7.5 10.5h9M9 6.5l2.8 4m3-4-2.8 4m-4.5 3h9m-7.5 4 2.8-4m3 4-2.8-4" /><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" /></svg>;
const ForwardRef = forwardRef(StacksStx);
export default ForwardRef;
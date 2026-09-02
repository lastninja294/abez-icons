import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LitecoinLtc = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M11.6 6.4h2.5L12 14.3h4.2l-.5 2.8H8l3-10.7zM15 11l-7.7 1.5" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /></svg>;
const ForwardRef = forwardRef(LitecoinLtc);
export default ForwardRef;
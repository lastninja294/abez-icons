import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PolkadotDot = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M5.4 13c-.6-1-.9-2.2-.9-3.5C4.5 5.4 7.9 2 12 2s7.5 3.4 7.5 7.5S16.1 17 12 17c0 0-2.7 0-3.7 2.2Q8 19.95 8 21l2-14" /></svg>;
const ForwardRef = forwardRef(PolkadotDot);
export default ForwardRef;
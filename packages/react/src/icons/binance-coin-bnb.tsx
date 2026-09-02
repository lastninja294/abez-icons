import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BinanceCoinBnb = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 2 6 8l2 2 4-4 4 4 2-2zm0 20-6-6 2-2 4 4 4-4 2 2zm7.785-12.298-2.262 2.263 2.262 2.262 2.263-2.262zm-15.5 0-2.263 2.263 2.263 2.262 2.263-2.262z" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M11.929 9.525 9.454 12l2.475 2.475L14.404 12z" /></svg>;
const ForwardRef = forwardRef(BinanceCoinBnb);
export default ForwardRef;
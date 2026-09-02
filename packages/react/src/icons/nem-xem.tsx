import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const NemXem = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="M2 5s10-6 20 0c0 0 0 11-10 17 0 0-10-5-10-17Z" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M2.1 7.1C5.2 17.1 12 10 12 10c-1-6 4.1-7.1 4.1-7.1l.6-.1m-.3 15.7S19 13 12 10" /></svg>;
const ForwardRef = forwardRef(NemXem);
export default ForwardRef;
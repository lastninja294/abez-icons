import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Illustrator = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m6.7 16 3.5-8 3.6 8" /><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="M7.5 13.3h5.4" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M16.3 16v-5.3" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7" /></svg>;
const ForwardRef = forwardRef(Illustrator);
export default ForwardRef;
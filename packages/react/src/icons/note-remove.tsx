import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const NoteRemove = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M7 14h5M7 5.96 3.25 2.21m3.71.04L3.21 6M7 10h8m-5-8h6c3.33.18 5 1.41 5 5.99V16M3 9.01v6.97C3 19.99 4 22 9 22h6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 16-6 6v-3q0-3 3-3z" /></svg>;
const ForwardRef = forwardRef(NoteRemove);
export default ForwardRef;
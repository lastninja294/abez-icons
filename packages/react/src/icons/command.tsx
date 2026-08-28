import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Command = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8H8v8h8zM5 22c1.65 0 3-1.35 3-3v-3H5c-1.65 0-3 1.35-3 3s1.35 3 3 3M5 8h3V5c0-1.65-1.35-3-3-3S2 3.35 2 5s1.35 3 3 3m11 0h3c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3zm3 14c1.65 0 3-1.35 3-3s-1.35-3-3-3h-3v3c0 1.65 1.35 3 3 3" /></svg>;
const ForwardRef = forwardRef(Command);
export default ForwardRef;
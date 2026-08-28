import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Category2 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M17 10h2q3 0 3-3V5q0-3-3-3h-2q-3 0-3 3v2q0 3 3 3M5 22h2q3 0 3-3v-2q0-3-3-3H5q-3 0-3 3v2q0 3 3 3m1-12a4 4 0 1 0 0-8 4 4 0 0 0 0 8m12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /></svg>;
const ForwardRef = forwardRef(Category2);
export default ForwardRef;
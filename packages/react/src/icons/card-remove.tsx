import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CardRemove = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M1.898 10.03h20" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.458 20.53h-5.11c-3.55 0-4.45-.88-4.45-4.39V7.92c0-3.18.74-4.2 3.53-4.36.28-.01.59-.02.92-.02h11.11c3.55 0 4.45.88 4.45 4.39v4.41" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M17.898 22.03a4 4 0 1 0 0-8 4 4 0 0 0 0 8m1.072-2.88-2.11-2.12m2.088.03-2.12 2.11m-10.93-3.14h4" /></svg>;
const ForwardRef = forwardRef(CardRemove);
export default ForwardRef;
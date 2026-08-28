import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Redo = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M16.87 18.31h-8c-2.76 0-5-2.24-5-5s2.24-5 5-5h11" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m17.57 10.81 2.56-2.56-2.56-2.56" /></svg>;
const ForwardRef = forwardRef(Redo);
export default ForwardRef;
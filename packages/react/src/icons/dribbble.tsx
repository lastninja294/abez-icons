import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Dribbble = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M18.5 4.79c-2.6 4.55-7.61 7.16-12.83 6.69l-3.17-.29m3 8.18c2.6-4.55 7.61-7.16 12.83-6.69l3.17.29" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m7.63 3 3.18 3.95c2.13 2.64 3.64 5.71 4.44 9l1.21 4.99" /></svg>;
const ForwardRef = forwardRef(Dribbble);
export default ForwardRef;
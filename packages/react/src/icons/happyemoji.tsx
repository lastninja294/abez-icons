import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Happyemoji = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.21 16A5.83 5.83 0 0 0 12 18.5c1.98 0 3.73-.99 4.79-2.5" /></svg>;
const ForwardRef = forwardRef(Happyemoji);
export default ForwardRef;
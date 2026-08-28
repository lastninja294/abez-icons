import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Arrow2 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.28 10.45 21 6.73l-3.72-3.72M3 6.73h18M6.72 13.55 3 17.27l3.72 3.72M21 17.27H3" /></svg>;
const ForwardRef = forwardRef(Arrow2);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MoreCircle = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.997 12h.008m-4.009 0h.008m-4.009 0h.008" /></svg>;
const ForwardRef = forwardRef(MoreCircle);
export default ForwardRef;
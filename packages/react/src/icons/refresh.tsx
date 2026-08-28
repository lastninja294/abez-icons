import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Refresh = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.55 21.67C18.84 20.54 22 16.64 22 12c0-5.52-4.44-10-10-10C5.33 2 2 7.56 2 7.56m4.44 0H2V3" /><path stroke="currentColor" strokeDasharray="3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 12c0 5.52 4.48 10 10 10" /></svg>;
const ForwardRef = forwardRef(Refresh);
export default ForwardRef;
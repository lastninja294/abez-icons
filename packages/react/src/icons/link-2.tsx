import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Link2 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.06 10.94a5.74 5.74 0 0 1 0 8.13c-2.25 2.24-5.89 2.25-8.13 0s-2.25-5.89 0-8.13" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.59 13.41c-2.34-2.34-2.34-6.14 0-8.49s6.14-2.34 8.49 0 2.34 6.14 0 8.49" /></svg>;
const ForwardRef = forwardRef(Link2);
export default ForwardRef;
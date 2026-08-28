import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DriverRefresh = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6.25v2M22 12V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h3M10 6.25v2M6 16v2m4-2v2m4-10.75h4M2 12h20" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.56 20.33a3.24 3.24 0 0 1-2.81 1.62c-1.79 0-2.89-1.8-2.89-1.8m.07-3.06c.56-.98 1.61-1.63 2.82-1.63 2.17 0 3.25 1.8 3.25 1.8m0-2.01v2h-2m-2.14 2.89h-2V22" /></svg>;
const ForwardRef = forwardRef(DriverRefresh);
export default ForwardRef;
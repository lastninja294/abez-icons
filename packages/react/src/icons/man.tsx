import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Man = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.25 21.5a7.75 7.75 0 1 0 0-15.5 7.75 7.75 0 0 0 0 15.5m11.25-19L16 8m-1-5.5h6.5V9" /></svg>;
const ForwardRef = forwardRef(Man);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Sound = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8.25v7.5m4.5-10v12.5m4.5-15v17.5m4.5-15v12.5m4.5-10v7.5" /></svg>;
const ForwardRef = forwardRef(Sound);
export default ForwardRef;
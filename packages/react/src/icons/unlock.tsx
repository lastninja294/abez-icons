import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Unlock = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 22H7c-4 0-5-1-5-5v-2c0-4 1-5 5-5h10c4 0 5 1 5 5v2c0 4-1 5-5 5M6 10V8c0-3.31 1-6 6-6 4.5 0 6 2 6 5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" /></svg>;
const ForwardRef = forwardRef(Unlock);
export default ForwardRef;
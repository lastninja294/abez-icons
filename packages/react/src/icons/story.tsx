import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Story = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.42 7.95a6.253 6.253 0 0 1 0 8.84 6.253 6.253 0 0 1-8.84 0 6.253 6.253 0 0 1 0-8.84 6.253 6.253 0 0 1 8.84 0M8.25 21.64c-2-.8-3.75-2.25-4.91-4.26a9.9 9.9 0 0 1-1.25-6.25m3.76-6.65A9.94 9.94 0 0 1 12 2.36c2.27 0 4.36.77 6.04 2.05m-2.29 17.23c2-.8 3.75-2.25 4.91-4.26a9.9 9.9 0 0 0 1.25-6.25" /></svg>;
const ForwardRef = forwardRef(Story);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Ticket = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12.5A2.5 2.5 0 0 1 22 10V9c0-4-1-5-5-5H7C3 4 2 5 2 9v.5a2.5 2.5 0 0 1 0 5v.5c0 4 1 5 5 5h10c4 0 5-1 5-5a2.5 2.5 0 0 1-2.5-2.5" /><path stroke="currentColor" strokeDasharray="5 5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 4v16" /></svg>;
const ForwardRef = forwardRef(Ticket);
export default ForwardRef;
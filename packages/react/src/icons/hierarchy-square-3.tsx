import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HierarchySquare3 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.8 13.8V9.6m.15 8.4a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9M7.8 9.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6m8.4 0a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6m-8.32 4.2a2.425 2.425 0 0 1 2.36-1.82l2.06.01c1.57.01 2.91-1 3.4-2.41" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 2h6c5 0 7 2 7 7v6c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7" /></svg>;
const ForwardRef = forwardRef(HierarchySquare3);
export default ForwardRef;
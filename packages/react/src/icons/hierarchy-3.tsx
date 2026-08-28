import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Hierarchy3 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m14 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6M5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12H9c-2.2 0-4-1-4-4v8" /></svg>;
const ForwardRef = forwardRef(Hierarchy3);
export default ForwardRef;
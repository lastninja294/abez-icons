import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RotateLeft = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.11 5.08c.87-.26 1.83-.43 2.89-.43 4.79 0 8.67 3.88 8.67 8.67s-3.88 8.67-8.67 8.67-8.67-3.88-8.67-8.67c0-1.78.54-3.44 1.46-4.82m3.08-3.18L10.76 2M7.87 5.32l3.37 2.46" /></svg>;
const ForwardRef = forwardRef(RotateLeft);
export default ForwardRef;
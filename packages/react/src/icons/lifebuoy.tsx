import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Lifebuoy = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M4.9 4.93l3.54 3.53M4.9 19.07l3.54-3.53m10.61 3.53-3.54-3.53m3.54-10.61-3.54 3.53" /></svg>;
const ForwardRef = forwardRef(Lifebuoy);
export default ForwardRef;
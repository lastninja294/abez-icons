import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Mirror = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-6 4h12" /></svg>;
const ForwardRef = forwardRef(Mirror);
export default ForwardRef;
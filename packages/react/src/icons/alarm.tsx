import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Alarm = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 22h20M12 6a9 9 0 0 0-9 9v7h18v-7a9 9 0 0 0-9-9m0-4v1M4 4l1 1m15-1-1 1" /></svg>;
const ForwardRef = forwardRef(Alarm);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Aquarius = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7m7 7v6m3-3H9" /></svg>;
const ForwardRef = forwardRef(Aquarius);
export default ForwardRef;
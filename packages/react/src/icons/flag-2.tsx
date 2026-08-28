import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Flag2 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M6.45 2v20m.5-18 8.1 3.5c3.3 1.4 3.3 3.8.2 5.4L6.95 17" /></svg>;
const ForwardRef = forwardRef(Flag2);
export default ForwardRef;
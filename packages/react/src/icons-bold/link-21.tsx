import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Link21Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M19.07 14.24c-.29.29-.75.29-1.03 0a.72.72 0 0 1 0-1.03c2-2 2-5.25 0-7.24s-5.25-2-7.24 0-2 5.25 0 7.24c.29.29.29.75 0 1.03-.29.29-.75.29-1.03 0-2.57-2.57-2.57-6.75 0-9.31s6.75-2.57 9.31 0a6.594 6.594 0 0 1-.01 9.31" /><path fill="currentColor" d="M4.93 9.76c.29-.29.75-.29 1.03 0 .29.29.29.75 0 1.03-2 2-2 5.25 0 7.24s5.25 2 7.24 0 2-5.25 0-7.24a.72.72 0 0 1 0-1.03c.29-.29.75-.29 1.03 0 2.57 2.57 2.57 6.75 0 9.31s-6.75 2.57-9.31 0a6.594 6.594 0 0 1 .01-9.31" /></svg>;
const ForwardRef = forwardRef(Link21Bold);
export default ForwardRef;
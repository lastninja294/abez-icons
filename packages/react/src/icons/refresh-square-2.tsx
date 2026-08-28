import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RefreshSquare2 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.5 12c0 3.04-2.46 5.5-5.5 5.5s-4.89-3.06-4.89-3.06m0 2.75v-2.75h2.48M6.5 12c0-3.04 2.44-5.5 5.5-5.5 3.67 0 5.5 3.06 5.5 3.06m-2.44 0h2.44V6.81" /></svg>;
const ForwardRef = forwardRef(RefreshSquare2);
export default ForwardRef;
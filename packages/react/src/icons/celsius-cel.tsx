import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CelsiusCel = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M16.3 15.3c-1 1.3-2.6 2.2-4.3 2.2-3 0-5.4-2.4-5.4-5.4S9 6.6 12 6.6c1.2 0 2.4.4 3.3 1.1m2.1 3.7a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /></svg>;
const ForwardRef = forwardRef(CelsiusCel);
export default ForwardRef;
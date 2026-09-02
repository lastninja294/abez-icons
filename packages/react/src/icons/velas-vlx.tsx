import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VelasVlx = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M2 3h20M4 6.4h16c.9 0 1.4 1 .9 1.7l-8 12.4c-.4.7-1.4.7-1.9 0L3 8.1c-.4-.8.2-1.7 1-1.7" /></svg>;
const ForwardRef = forwardRef(VelasVlx);
export default ForwardRef;
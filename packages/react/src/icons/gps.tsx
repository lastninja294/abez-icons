import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Gps = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-11V2M4 12H2m10 8v2m8-10h2" /></svg>;
const ForwardRef = forwardRef(Gps);
export default ForwardRef;
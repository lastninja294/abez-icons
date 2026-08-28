import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const More2 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9.32c1.19 0 2.16-.97 2.16-2.16S13.19 5 12 5s-2.16.97-2.16 2.16.97 2.16 2.16 2.16M6.79 19c1.19 0 2.16-.97 2.16-2.16s-.97-2.16-2.16-2.16-2.16.97-2.16 2.16S5.59 19 6.79 19m10.42 0c1.19 0 2.16-.97 2.16-2.16s-.97-2.16-2.16-2.16-2.16.97-2.16 2.16.97 2.16 2.16 2.16" /></svg>;
const ForwardRef = forwardRef(More2);
export default ForwardRef;
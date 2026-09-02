import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowLeft3Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="m13.98 5.32-3.21 3.21-1.97 1.96a2.13 2.13 0 0 0 0 3.01l5.18 5.18c.68.68 1.84.19 1.84-.76V6.08c0-.96-1.16-1.44-1.84-.76" /></svg>;
const ForwardRef = forwardRef(ArrowLeft3Bold);
export default ForwardRef;
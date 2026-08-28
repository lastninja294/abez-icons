import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DocumentCode2 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M11 22h5c3.5 0 5-2 5-5V7c0-3-1.5-5-5-5H8C4.5 2 3 4 3 7v7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M14.5 4.5v2c0 1.1.9 2 2 2h2M4 17l-2 2 2 2m3-4 2 2-2 2" /></svg>;
const ForwardRef = forwardRef(DocumentCode2);
export default ForwardRef;
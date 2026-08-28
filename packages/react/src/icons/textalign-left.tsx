import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TextalignLeft = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4.5h18m-18 5h9.47M3 14.5h18m-18 5h9.47" /></svg>;
const ForwardRef = forwardRef(TextalignLeft);
export default ForwardRef;
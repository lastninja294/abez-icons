import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TextItalic = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.62 3h9.25M5.12 21h9.25m-.12-18-4.5 18" /></svg>;
const ForwardRef = forwardRef(TextItalic);
export default ForwardRef;
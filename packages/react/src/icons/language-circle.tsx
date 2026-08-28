import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LanguageCircle = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.99 8.96H7.01M12 7.28v1.68m2.5-.02c0 4.3-3.36 7.78-7.5 7.78" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16.72c-1.8 0-3.4-.96-4.55-2.47" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /></svg>;
const ForwardRef = forwardRef(LanguageCircle);
export default ForwardRef;
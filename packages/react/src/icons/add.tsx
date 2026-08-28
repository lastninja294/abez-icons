import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Add = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12h12m-6 6V6" /></svg>;
const ForwardRef = forwardRef(Add);
export default ForwardRef;
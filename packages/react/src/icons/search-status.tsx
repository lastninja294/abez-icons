import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SearchStatus = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5h6m-6 3h3m4 3.5c0 5.25-4.25 9.5-9.5 9.5S2 16.75 2 11.5 6.25 2 11.5 2M22 22l-2-2" /></svg>;
const ForwardRef = forwardRef(SearchStatus);
export default ForwardRef;
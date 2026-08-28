import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const UserSearch = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10M3.41 22c0-3.87 3.85-7 8.59-7m6.2 6.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4m3.8.6-1-1" /></svg>;
const ForwardRef = forwardRef(UserSearch);
export default ForwardRef;
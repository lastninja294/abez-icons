import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Logout1Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7.88 12.07c0-.41.34-.75.75-.75h5.48V2.86a.87.87 0 0 0-.87-.86c-5.89 0-10 4.11-10 10s4.11 10 10 10c.47 0 .86-.38.86-.86v-8.33H8.63a.734.734 0 0 1-.75-.74" /><path fill="currentColor" d="M20.54 11.54 17.7 8.69a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.56 1.56h-4.1v1.5h4.09l-1.56 1.56c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.84-2.85c.3-.28.3-.75.01-1.04" /></svg>;
const ForwardRef = forwardRef(Logout1Bold);
export default ForwardRef;
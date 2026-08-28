import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Convert = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12.005 21.984c5.511 0 9.98-4.468 9.98-9.979s-4.469-9.98-9.98-9.98-9.98 4.469-9.98 9.98 4.469 9.98 9.98 9.98" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m6.137 4.022 8.163 8.183.02-4.541m3.543 12.314L9.7 11.805l-.02 4.531" /></svg>;
const ForwardRef = forwardRef(Convert);
export default ForwardRef;
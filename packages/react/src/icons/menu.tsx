import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Menu = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M3 7h18M3 12h18M3 17h18" /></svg>;
const ForwardRef = forwardRef(Menu);
export default ForwardRef;
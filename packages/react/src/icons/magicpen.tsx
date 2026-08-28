import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Magicpen = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.5 20.5c.83.83 2.17.83 3 0l13-13c.83-.83.83-2.17 0-3s-2.17-.83-3 0l-13 13c-.83.83-.83 2.17 0 3M18.01 8.99l-3-3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 2.44 10 2l-.44 1.5L10 5l-1.5-.44L7 5l.44-1.5L7 2zm-4 6L6 8l-.44 1.5L6 11l-1.5-.44L3 11l.44-1.5L3 8zm15 5L21 13l-.44 1.5L21 16l-1.5-.44L18 16l.44-1.5L18 13z" /></svg>;
const ForwardRef = forwardRef(Magicpen);
export default ForwardRef;
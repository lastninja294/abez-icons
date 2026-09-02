import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Photoshop = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M7.5 16V8h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2m9-1h-1.3c-.7 0-1.2.6-1.2 1.2 0 .7.6 1.2 1.2 1.2.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2H14" /></svg>;
const ForwardRef = forwardRef(Photoshop);
export default ForwardRef;
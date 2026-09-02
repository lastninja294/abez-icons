import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Frame1 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M11 5v3H9c-.6 0-1 .4-1 1v2H5V9c0-2.2 1.8-4 4-4zm2 14v-3h2c.6 0 1-.4 1-1v-2h3v2c0 2.2-1.8 4-4 4z" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7" /></svg>;
const ForwardRef = forwardRef(Frame1);
export default ForwardRef;
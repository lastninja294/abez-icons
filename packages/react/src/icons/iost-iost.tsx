import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const IostIost = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M11 2.6 4.5 6.4c-.6.4-1 1-1 1.7v7.7c0 .7.4 1.4 1 1.7l6.5 3.8c.6.4 1.4.4 2 0l6.5-3.8c.6-.4 1-1 1-1.7V8.1c0-.7-.4-1.4-1-1.7L13 2.6c-.6-.4-1.4-.4-2 0" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m17 9-5-3-5 3 10 6-5 3-5-3m4.5-5-2 2m5 0-2 2" /></svg>;
const ForwardRef = forwardRef(IostIost);
export default ForwardRef;
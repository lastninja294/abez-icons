import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CivicCvc = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="M14.3 10.1c.3 1.1-.2 2.1-1 2.6v2c0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.6-1.2-1.2v-2c-.7-.4-1.1-1.2-1.1-2 0-1.5 1.4-2.7 3-2.3.6.3 1.3.9 1.5 1.7Z" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M21.6 9c-1.3-4-5.1-7-9.6-7C6.5 2 2 6.5 2 12s4.5 10 10 10c4.5 0 8.3-2.9 9.5-7" /></svg>;
const ForwardRef = forwardRef(CivicCvc);
export default ForwardRef;
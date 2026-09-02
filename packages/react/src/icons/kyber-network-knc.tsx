import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const KyberNetworkKnc = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M11 2.6 6 5.4c-.6.4-1 1-1 1.7V16c0 .6.3 1.3.8 1.6l5 3.6c.7.5 1.6.5 2.3 0l5-3.6c.5-.4.8-1 .8-1.6V7.2c0-.7-.4-1.4-1-1.7l-5-2.9c-.5-.4-1.3-.4-1.9 0" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m12 3-2 9 1.8 9.2" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M18.2 16.9 10 12l8.5-4.7" /></svg>;
const ForwardRef = forwardRef(KyberNetworkKnc);
export default ForwardRef;
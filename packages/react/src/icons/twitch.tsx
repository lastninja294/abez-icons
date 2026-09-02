import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Twitch = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M4.5 2h17v12l-5 5h-5l-2 3h-3v-3h-4V5z" clipRule="evenodd" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M11 7H9v6h2zm5 0h-2v6h2z" /></svg>;
const ForwardRef = forwardRef(Twitch);
export default ForwardRef;
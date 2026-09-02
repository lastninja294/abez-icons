import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AnkrAnkr = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M3.1 9.8V6.4L12 2l8.9 4.4v3.4M3.1 14.2v3.4L12 22l8.9-4.4v-3.4M12 22v-5.6" /><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="M12 16.4a4.4 4.4 0 1 0 0-8.8 4.4 4.4 0 0 0 0 8.8Z" /></svg>;
const ForwardRef = forwardRef(AnkrAnkr);
export default ForwardRef;
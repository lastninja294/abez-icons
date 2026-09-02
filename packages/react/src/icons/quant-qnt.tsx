import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const QuantQnt = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 2 3 7v10l9 5 5-2.5 4 2.5v-5l-4-2.2 4-2.8V7z" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 6.4 7 9.2v5.6l5 2.8 5-2.8V9.2zM3 7l4 2.2M3 17l4-2.2M21 7l-4 2.2M12 6V2m0 20v-4" /><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="M17 20v-5" /></svg>;
const ForwardRef = forwardRef(QuantQnt);
export default ForwardRef;
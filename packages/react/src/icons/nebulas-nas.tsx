import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const NebulasNas = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m12 5.2-2.5 8 5-2.4z" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m14.1 11 3.9 1.2-4.5 2.6-.4-.2L6 12.2l4-2m3 5-1 3-2.5-4.6" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /></svg>;
const ForwardRef = forwardRef(NebulasNas);
export default ForwardRef;
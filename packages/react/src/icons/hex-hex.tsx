import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HexHex = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="M17 3.3H7L2 12l5 8.7h10l5-8.7z" /><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="M10.9 14H7l-1.9 3.3L7 20.7h3.9l1.9-3.4z" /><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="M14.3 8H7l-3.6 6.3L7 20.7h7.3l3.7-6.4z" /></svg>;
const ForwardRef = forwardRef(HexHex);
export default ForwardRef;
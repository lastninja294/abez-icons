import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Figma = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="M12 2H8.7C6.8 2 5.3 3.5 5.3 5.3s1.5 3.3 3.3 3.3H12zm0 6.7H8.7c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3H12zm0 6.6H8.7c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3zM12 2h3.3c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3H12zm3.3 6.7c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3S12 13.8 12 12s1.5-3.3 3.3-3.3Z" /></svg>;
const ForwardRef = forwardRef(Figma);
export default ForwardRef;
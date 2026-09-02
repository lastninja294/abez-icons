import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Dropbox = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 5 7.6 2 2 6l4.4 3zm0 0 4.4-3L22 6l-4.4 3zm0 9-4.4 3L2 13l4.4-3zm0 0 4.4 3 5.6-4-4.4-3z" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M19 15.5v3.3l-6.6 3c-.3.1-.6.1-.8 0l-6.6-3v-3.3" /></svg>;
const ForwardRef = forwardRef(Dropbox);
export default ForwardRef;
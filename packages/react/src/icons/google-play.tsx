import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GooglePlay = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m21.4 12.9-4.5 2.3-3.2-3.2 3.2-3.2 4.5 2.2c.8.4.8 1.6 0 1.9" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M16.9 8.8 13.7 12l-9.6 9.6-.6.3c-.7.4-1.5-.2-1.5-1V3.1c0-.8.8-1.3 1.5-1z" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M16.9 15.2 4.1 21.6l9.6-9.6zM13.7 12 4.1 2.4" /></svg>;
const ForwardRef = forwardRef(GooglePlay);
export default ForwardRef;
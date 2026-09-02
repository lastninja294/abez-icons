import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ThorchainRune = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="m12.7 11.7 4.1 4.1c.5.6.3 1.5-.4 1.8L6.1 21.9c-1.1.5-2-.9-1.2-1.7zm0 0L8.6 7.6c-.5-.5-.3-1.5.4-1.8l8.9-3.7c1.1-.4 2 .8 1.3 1.7z" /></svg>;
const ForwardRef = forwardRef(ThorchainRune);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Spotify = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M6.6 9.3c3.6-1.4 7.7-.9 10.9 1.3m-9.6 1.8c2.7-1 5.7-.7 8 1m-7.1 2c2-.8 4.2-.5 6 .7" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Spotify);
export default ForwardRef;
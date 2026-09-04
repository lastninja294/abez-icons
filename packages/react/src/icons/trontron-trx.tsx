import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TrontronTrx = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m2.6 3.6 6.7 16.8c.4.9 1.1 1 1.7.2l9.4-11.9c.3-.4.3-1-.1-1.3l-3.1-3.1c-.1-.2-.4-.3-.5-.3l-13-1.7c-.9-.2-1.4.4-1.1 1.3" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m10 21 1-11-8-7.1M17 4l-6 6 9-1.8" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(TrontronTrx);
export default ForwardRef;
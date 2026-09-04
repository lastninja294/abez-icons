import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Html3 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M4.1 2h15.8c.6 0 1.1.5 1 1.1l-1.8 16.2c0 .4-.3.7-.7.9l-6.1 1.7c-.2.1-.4.1-.5 0l-6.1-1.7c-.4-.1-.7-.4-.7-.9L3.1 3.1c0-.6.4-1.1 1-1.1" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M7.5 7h9l-1 9-3.5 1-3.5-1-.5-2m0-3h8.1" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Html3);
export default ForwardRef;
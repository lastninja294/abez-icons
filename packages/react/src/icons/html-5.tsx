import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Html5 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M4.1 2h15.8c.6 0 1.1.5 1 1.1l-1.8 16.2c0 .4-.3.7-.7.9l-6.1 1.7c-.2.1-.4.1-.5 0l-6.1-1.7c-.4-.1-.7-.4-.7-.9L3.1 3.1c0-.6.4-1.1 1-1.1" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M16.2 6.8H7.8l.4 4.4h7.6l-.6 5-3.4 1-3.6-1v-2" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Html5);
export default ForwardRef;
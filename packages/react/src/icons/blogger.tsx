import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Blogger = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="M6 9v6q0 3 3 3h6q3 0 3-3v-3c0-.6-.4-1-1-1s-1-.4-1-1V9q0-3-3-3H9Q6 6 6 9Z" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M10 10h2m-2 4h4" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Blogger);
export default ForwardRef;
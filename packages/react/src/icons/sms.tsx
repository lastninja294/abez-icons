import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Sms = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Sms);
export default ForwardRef;
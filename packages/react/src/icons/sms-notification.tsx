import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SmsNotification = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M22 10.5v5c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m7 9 3.13 2.5c1.03.82 2.72.82 3.75 0l1.18-.94M19.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(SmsNotification);
export default ForwardRef;
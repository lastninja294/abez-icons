import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TimerStart = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v5m0 9c-4.83 0-8.75-3.92-8.75-8.75S7.17 4.5 12 4.5s8.75 3.92 8.75 8.75" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M9 2h6m-.1 16.5v-1.16c0-1.43 1.02-2.02 2.26-1.3l1 .58 1 .58c1.24.72 1.24 1.89 0 2.61l-1 .58-1 .58c-1.24.72-2.26.13-2.26-1.3z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(TimerStart);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const KeyboardOpen = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.26 2h9.47c.65 0 1.23.02 1.75.09C21.25 2.4 22 3.7 22 7.26v6.32c0 3.56-.75 4.86-3.52 5.17-.52.07-1.09.09-1.75.09H7.26c-.65 0-1.23-.02-1.75-.09-2.77-.31-3.52-1.61-3.52-5.17V7.26c0-3.56.75-4.86 3.52-5.17.52-.07 1.1-.09 1.75-.09m6.32 6.32h3.68M6.74 14.11h10.53M7 22h10" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.195 8.3h.009m3.291 0h.009" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(KeyboardOpen);
export default ForwardRef;
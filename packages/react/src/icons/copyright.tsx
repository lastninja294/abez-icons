import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Copyright = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.88 15a4 4 0 0 1-2.64 1c-2.21 0-4-1.79-4-4s1.79-4 4-4a4 4 0 0 1 2.64 1" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Copyright);
export default ForwardRef;
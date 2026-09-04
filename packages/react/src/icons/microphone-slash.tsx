import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MicrophoneSlash = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 6.3V6c0-2.21-1.79-4-4-4S8 3.79 8 6v5m1.04 3.19c.73.81 1.79 1.31 2.96 1.31 2.21 0 4-1.79 4-4V11" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.78 16.95a7.656 7.656 0 0 0 12.87-5.6v-1.7m-15.3 0v1.7c0 1.06.21 2.06.6 2.98M20.07 2.84 3.93 18.99M11 3v3m1 13v3" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(MicrophoneSlash);
export default ForwardRef;
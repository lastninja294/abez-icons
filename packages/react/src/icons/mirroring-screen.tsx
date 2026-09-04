import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MirroringScreen = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 9V8c0-3 2-5 5-5h10c3 0 5 2 5 5v8c0 3-2 5-5 5h-1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.69 11.71c4.62.59 8.01 3.99 8.61 8.61m-9.68-5.25c3.39.43 5.88 2.93 6.32 6.32m-6.96-2.53c1.69.22 2.94 1.46 3.16 3.16" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(MirroringScreen);
export default ForwardRef;
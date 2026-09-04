import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AlignHorizontally = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.75 17.4V6.6c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v10.8c0 1.5-.64 2.1-2.23 2.1H6.98c-1.59 0-2.23-.6-2.23-2.1m8.5-2V8.6c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v6.8c0 1.5-.64 2.1-2.23 2.1h-1.04c-1.59 0-2.23-.6-2.23-2.1M2 12h2.4m6.6 0h2m9 0h-2.69" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(AlignHorizontally);
export default ForwardRef;
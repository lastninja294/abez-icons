import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CheckBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M15 22c-.41 0-.75-.34-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5c0 .41-.34.75-.75.75" /><path fill="currentColor" d="M18 20h-3V4h3c2.21 0 4 1.79 4 4v8c0 2.21-1.79 4-4 4M6 4C3.79 4 2 5.79 2 8v8c0 2.21 1.79 4 4 4h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm1.75 11.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75s.75.34.75.75z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(CheckBold);
export default ForwardRef;
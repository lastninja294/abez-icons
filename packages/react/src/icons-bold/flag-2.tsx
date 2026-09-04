import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Flag2Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="m15.2 7.16-8-3.46v-.95c0-.41-.34-.75-.75-.75s-.75.34-.75.75v18.5c0 .41.34.75.75.75s.75-.34.75-.75v-3.96l8.22-4.06h.01c1.66-.86 2.55-1.97 2.5-3.14s-1.02-2.21-2.73-2.93" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Flag2Bold);
export default ForwardRef;
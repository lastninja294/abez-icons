import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TextalignCenter = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4.5h18m-13.74 5h9.48M3 14.5h18m-13.74 5h9.48" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(TextalignCenter);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const User = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10m8.59 10c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(User);
export default ForwardRef;
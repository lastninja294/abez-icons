import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SidebarBottom = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7m.03.5H2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.56 8.5 12 11.06 9.44 8.5" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(SidebarBottom);
export default ForwardRef;
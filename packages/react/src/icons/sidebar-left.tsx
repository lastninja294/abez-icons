import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SidebarLeft = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7m-14-13v20" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.97 9.44 12.41 12l2.56 2.56" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(SidebarLeft);
export default ForwardRef;
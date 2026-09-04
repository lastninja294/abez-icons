import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DashDash = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M7.1 3.5H16c4 0 6 2.5 6 6V12c0 5-3 8.5-8.5 8.5H3.9L5 16.2h7.4c3.6 0 5.3-2.2 5.3-5.3v-.2c0-1.8-.8-3-3-3H6.1z" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M11.5 10.5H4.3c-.9 0-1.7.6-1.9 1.5L2 13.5h7.2c.9 0 1.7-.6 1.9-1.5z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(DashDash);
export default ForwardRef;
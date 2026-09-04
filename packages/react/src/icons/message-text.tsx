import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MessageText = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 2H8Q2 2 2 8v13c0 .55.45 1 1 1h13q6 0 6-6V8q0-6-6-6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M7 9.5h10m-10 5h7" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(MessageText);
export default ForwardRef;
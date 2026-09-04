import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Bank = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m12.37 2.15 9 3.6c.35.14.63.56.63.93V10c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V6.68c0-.37.28-.79.63-.93l9-3.6c.2-.08.54-.08.74 0M22 22H2v-3c0-.55.45-1 1-1h18c.55 0 1 .45 1 1zM4 18v-7m4 7v-7m4 7v-7m4 7v-7m4 7v-7M1 22h22" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Bank);
export default ForwardRef;
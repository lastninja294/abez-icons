import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MessageSearch = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M13.2 21.37c-.66.88-1.74.88-2.4 0l-1.5-2c-.17-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-5q0-6 6-6h8q6 0 6 6v5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4m3.8.6-1-1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.997 11h.008m-4.009 0h.008m-4.009 0h.008" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(MessageSearch);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MessageProgramming = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M8.5 18.97H8c-4 0-6-1-6-6v-5q0-6 6-6h8q6 0 6 6v5q0 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.52-.4-.8-.4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m8 8.7-2 2 2 2m8-4 2 2-2 2m-3-4.33-2 4.66" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(MessageProgramming);
export default ForwardRef;
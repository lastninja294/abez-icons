import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Paperclip = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.97 12v3.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V10c0-3.87-3.13-7-7-7s-7 3.13-7 7v6c0 3.31 2.69 6 6 6" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Paperclip);
export default ForwardRef;
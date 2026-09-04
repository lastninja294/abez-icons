import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Wind2 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m2 13.1 2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5M2 3.9l2.5 1.5c1.54.92 3.46.92 5 0s3.46-.92 5 0 3.46.92 5 0L22 3.9M2 20.1l2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Wind2);
export default ForwardRef;
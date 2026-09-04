import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VideoHorizontal = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7M2.52 17.11h18.96m-18.96-10h18.96m-14.51 10v4.35M12 17.11v4.86m4.97-4.86v4.41m-10-19.41v4.35M12 2.11v4.86m0 .06v11m4.97-15.92v4.41" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(VideoHorizontal);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CloudFog = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M4.29 11.62C1.09 2.69 14.62-.87 16.17 8.5c1.93.24 3.34 1.52 4.03 3.12" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M14.54 8.93c.52-.26 1.09-.4 1.67-.41M4 15.03h16m-14 3h12m-9 3h6" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(CloudFog);
export default ForwardRef;
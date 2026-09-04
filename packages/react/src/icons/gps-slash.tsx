import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GpsSlash = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 18.88c.92.4 1.93.62 3 .62 4.14 0 7.5-3.36 7.5-7.5 0-1.07-.22-2.08-.62-3m-1.67-2.4A7.503 7.503 0 0 0 6.58 17.19M12 4V2M4 12H2m10 8v2m8-10h2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m14.12 9.88-4.24 4.24a2.996 2.996 0 1 1 4.24-4.24M22 2 2 22" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(GpsSlash);
export default ForwardRef;
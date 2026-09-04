import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Crop = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.9 19H19V9.9C19 6 18 5 14.1 5H5v9.1C5 18 6 19 9.9 19" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M5 5V2m0 3H2m17 14v3m0-3h3" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Crop);
export default ForwardRef;
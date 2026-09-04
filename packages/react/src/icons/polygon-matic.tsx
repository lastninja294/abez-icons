import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PolygonMatic = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m12 12.1-4.5 2.6L3 12.1V6.9l4.5-2.6L12 6.9v1.6m0 3.6 4.5-2.6 4.5 2.6v5.2l-4.5 2.6-4.5-2.6v-1.7" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(PolygonMatic);
export default ForwardRef;
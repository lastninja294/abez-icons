import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SearchZoomIn = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.2 11.7h5m-2.5 2.5v-5M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19M22 22l-2-2" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(SearchZoomIn);
export default ForwardRef;
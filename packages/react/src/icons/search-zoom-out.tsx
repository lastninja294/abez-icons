import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SearchZoomOut = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18m-2.5-9h5m5.43 9.69c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(SearchZoomOut);
export default ForwardRef;
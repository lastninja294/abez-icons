import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Grid6 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7m1-20v20m0-13.5h12m-12 7h12" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Grid6);
export default ForwardRef;
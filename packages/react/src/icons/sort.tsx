import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Sort = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M3 7h18M6 12h12m-8 5h4" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Sort);
export default ForwardRef;
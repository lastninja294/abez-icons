import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Refresh2 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 12c0 5.52-4.48 10-10 10s-8.89-5.56-8.89-5.56m0 5v-5h4.52M2 12C2 6.48 6.44 2 12 2c6.67 0 10 5.56 10 5.56m-4.44 0H22v-5" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Refresh2);
export default ForwardRef;
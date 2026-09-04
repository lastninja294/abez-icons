import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MaximizeCircle = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 3h4v4m-6 2 6-6M7 21H3v-4m6-2-6 6M14.02 2.2C13.37 2.07 12.69 2 12 2 6.48 2 2 6.48 2 12c0 .69.07 1.36.2 2m7.78 7.8c.65.13 1.33.2 2.02.2 5.52 0 10-4.48 10-10 0-.68-.07-1.35-.2-2" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(MaximizeCircle);
export default ForwardRef;
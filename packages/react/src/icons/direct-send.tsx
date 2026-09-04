import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DirectSend = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9V2l-2 2m2-2 2 2M1.98 13h4.41c.38 0 .72.21.89.55l1.17 2.34A2 2 0 0 0 10.24 17h3.53a2 2 0 0 0 1.79-1.11l1.17-2.34a1 1 0 0 1 .89-.55h4.36" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 5.13c-3.54.52-5 2.6-5 6.87v3c0 5 2 7 7 7h6c5 0 7-2 7-7v-3c0-4.27-1.46-6.35-5-6.87" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(DirectSend);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const NotificationStatus = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 13h5m-5 4h9" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(NotificationStatus);
export default ForwardRef;
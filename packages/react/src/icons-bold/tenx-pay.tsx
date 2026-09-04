import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TenxPayBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5.79 10.71-1.84 1.84a.996.996 0 0 1-1.41 0L12 12l-2.54 2.54a.996.996 0 0 1-1.41 0L6.21 12.7a.996.996 0 0 1 0-1.41l1.84-1.84a.996.996 0 0 1 1.41 0L12 12l2.54-2.54a.996.996 0 0 1 1.41 0l1.84 1.84c.39.38.39 1.02 0 1.41" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(TenxPayBold);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Woman = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0 0v6m3-3H9" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Woman);
export default ForwardRef;
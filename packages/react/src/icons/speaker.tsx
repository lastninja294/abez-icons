import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Speaker = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M9 22h6c3 0 4-1 4-4V6c0-3-1-4-4-4H9C6 2 5 3 5 6v12c0 3 1 4 4 4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Speaker);
export default ForwardRef;
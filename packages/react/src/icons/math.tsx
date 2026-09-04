import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Math = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.42 5.64h7.28m-19.4 0h7.28m4.84 9.69h7.28m-7.28 6.06h7.28M18.09 9.27V2M2.3 22l7.28-7.27m0 7.27L2.3 14.73" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Math);
export default ForwardRef;
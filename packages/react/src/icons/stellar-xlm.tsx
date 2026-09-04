import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const StellarXlm = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M16.4 5c-1.3-.8-2.8-1.2-4.4-1.2-4.6 0-8.2 3.7-8.2 8.2 0 .8.1 1.5.3 2.2M7.6 19c1.3.8 2.8 1.3 4.4 1.3 4.6 0 8.2-3.7 8.2-8.2q0-1.2-.3-2.4M2 16 22 5m0 3.5-20 11" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(StellarXlm);
export default ForwardRef;
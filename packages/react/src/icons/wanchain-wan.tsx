import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WanchainWan = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M16.5 8.9 12 6.2 7.5 8.9m0 .1v6.1l4.5-2.7 4.5 2.7V9m-2.3 7.2L12 17.7l-2.2-1.5" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(WanchainWan);
export default ForwardRef;
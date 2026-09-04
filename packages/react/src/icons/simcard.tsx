import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Simcard = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m19.54 6.54-3.07-3.07a5 5 0 0 0-3.54-1.46H8c-3 0-5 2-5 5v10c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93a5 5 0 0 0-1.46-3.54" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m9.5 14-2 2 2 2m5-4 2 2-2 2" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Simcard);
export default ForwardRef;
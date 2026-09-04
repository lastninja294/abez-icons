import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Building4 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M1 22h22m-3.22.01v-4.46m.02-6.66c-1.22 0-2.2.98-2.2 2.2v2.27c0 1.22.98 2.2 2.2 2.2s2.2-.98 2.2-2.2v-2.27c0-1.22-.98-2.2-2.2-2.2M2.1 22V6.03c0-2.01 1-3.02 2.99-3.02h6.23c1.99 0 2.98 1.01 2.98 3.02V22M5.8 8.25h4.95M5.8 12h4.95m-2.5 10v-3.75" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Building4);
export default ForwardRef;
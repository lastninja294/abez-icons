import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Pharagraphspacing = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 22h18M3 2h18m-9 4v12m2.83-10.28L12 4.89 9.17 7.72m5.66 8.17L12 18.72l-2.83-2.83" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Pharagraphspacing);
export default ForwardRef;
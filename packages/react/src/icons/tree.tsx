import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Tree = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.17 10.06H7.83c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.79 0l4.17 5.84c.7.96.29 1.75-.89 1.75" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.59 18H6.42c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.57l3.99 5.61c.93 1.28.39 2.33-1.19 2.33M12 22v-4" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Tree);
export default ForwardRef;
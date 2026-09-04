import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Activity = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m7.33 14.49 2.38-3.09c.34-.44.97-.52 1.41-.18l1.83 1.44c.44.34 1.07.26 1.41-.17l2.31-2.98" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Activity);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Scroll = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m9.6 8.97-2.49 2.49c-.29.29-.29.78 0 1.07l2.49 2.49m4.8-6.05 2.49 2.49c.29.29.29.78 0 1.07l-2.49 2.49" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Scroll);
export default ForwardRef;
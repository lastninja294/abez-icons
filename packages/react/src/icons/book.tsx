import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Book = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.5 18V7c0-4 1-5 5-5h7c4 0 5 1 5 5v10c0 .14 0 .28-.01.42" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.35 15H20.5v3.5c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5v-.65C3.5 16.28 4.78 15 6.35 15M8 7h8m-8 3.5h5" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Book);
export default ForwardRef;
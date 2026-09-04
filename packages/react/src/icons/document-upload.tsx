import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DocumentUpload = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-6l-2 2m2-2 2 2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 10h-4c-3 0-4-1-4-4V2z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(DocumentUpload);
export default ForwardRef;
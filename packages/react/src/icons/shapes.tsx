import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Shapes = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.43 15H4.4c-1.82 0-2.98-1.95-2.1-3.55l2.33-4.24 2.18-3.97c.91-1.65 3.29-1.65 4.2 0l2.19 3.97 1.05 1.91 1.28 2.33c.88 1.6-.28 3.55-2.1 3.55" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 15.5a6.5 6.5 0 1 1-13 0c0-.17.01-.33.02-.5h4.41c1.82 0 2.98-1.95 2.1-3.55l-1.28-2.33A6.5 6.5 0 0 1 22 15.5" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Shapes);
export default ForwardRef;
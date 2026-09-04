import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MouseCircle = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m20.96 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L13.08 15c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(MouseCircle);
export default ForwardRef;
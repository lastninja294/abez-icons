import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CodeCircle = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m8 10-2 2 2 2m8-4 2 2-2 2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1-12.33-2 4.66" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(CodeCircle);
export default ForwardRef;
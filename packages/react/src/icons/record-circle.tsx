import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RecordCircle = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 16.23a4.23 4.23 0 1 0 0-8.46 4.23 4.23 0 0 0 0 8.46" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(RecordCircle);
export default ForwardRef;
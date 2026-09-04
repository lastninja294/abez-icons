import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BuyCryptoBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M22 8.5c0 3.26-2.4 5.95-5.52 6.42v-.06c-.31-3.88-3.46-7.03-7.37-7.34h-.03A6.495 6.495 0 0 1 15.5 2 6.5 6.5 0 0 1 22 8.5" /><path fill="currentColor" d="M14.98 14.98A6.51 6.51 0 0 0 8.5 9a6.5 6.5 0 1 0 6.48 5.98m-5.6 1.4L8.5 18l-.88-1.62L6 15.5l1.62-.88L8.5 13l.88 1.62 1.62.88z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(BuyCryptoBold);
export default ForwardRef;
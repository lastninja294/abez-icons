import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CardSlash = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M2 8.5h13.24M6 16.5h1.29m3.71 0h3.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.98 20.5h9.58c3.56 0 4.44-.88 4.44-4.39V6.89m-2.01-3.14c-.62-.18-1.42-.25-2.43-.25H6.44C2.89 3.5 2 4.38 2 7.89v8.21c0 2.34.39 3.51 1.71 4.03M22 2 2 22" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(CardSlash);
export default ForwardRef;
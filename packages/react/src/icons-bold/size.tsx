import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SizeBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M21.97 5.5v4a3.5 3.5 0 0 1-3.002 3.465c-.273.039-.498-.189-.498-.465v-.25c0-3.72-3.02-6.75-6.75-6.75h-.25c-.276 0-.504-.225-.465-.498A3.505 3.505 0 0 1 14.47 2h4c1.94 0 3.5 1.57 3.5 3.5" /><path fill="currentColor" d="M11.72 7H6.97c-2.76 0-5 2.24-5 5v5c0 2.76 2.24 5 5 5h5c2.76 0 5-2.24 5-5v-4.75c0-2.9-2.35-5.25-5.25-5.25" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(SizeBold);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CommandBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M16 8H8v8h8zM2 19c0 1.65 1.35 3 3 3s3-1.35 3-3v-3H5c-1.65 0-3 1.35-3 3M5 2C3.35 2 2 3.35 2 5s1.35 3 3 3h3V5c0-1.65-1.35-3-3-3m17 3c0-1.65-1.35-3-3-3s-3 1.35-3 3v3h3c1.65 0 3-1.35 3-3m-3 11h-3v3c0 1.65 1.35 3 3 3s3-1.35 3-3-1.35-3-3-3" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(CommandBold);
export default ForwardRef;
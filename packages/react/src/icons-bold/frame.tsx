import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FrameBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11 19.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1v15.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1m10.5-.26v-4.28c0-1.3-1-2.36-2.23-2.36h-4.04C14 13 13 14.06 13 15.36v4.28c0 1.3 1 2.36 2.23 2.36h4.04c1.23 0 2.23-1.06 2.23-2.36m0-11V4.36c0-1.3-1-2.36-2.23-2.36h-4.04C14 2 13 3.06 13 4.36v4.28c0 1.3 1 2.36 2.23 2.36h4.04c1.23 0 2.23-1.06 2.23-2.36" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(FrameBold);
export default ForwardRef;
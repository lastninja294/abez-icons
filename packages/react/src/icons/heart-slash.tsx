import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HeartSlash = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.11 17.5C3.9 15.43 2 12.48 2 8.68c0-3.09 2.49-5.59 5.56-5.59 1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24c1.15 0 2.22.35 3.11.96M21.74 7c.17.53.26 1.1.26 1.69 0 7-6.48 11.13-9.38 12.13-.34.12-.9.12-1.24 0-.65-.22-1.47-.6-2.36-1.13M22 2 2 22" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(HeartSlash);
export default ForwardRef;
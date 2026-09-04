import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Video = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12.53 20.42H6.21c-3.16 0-4.21-2.1-4.21-4.21V7.79c0-3.16 1.05-4.21 4.21-4.21h6.32c3.16 0 4.21 1.05 4.21 4.21v8.42c0 3.16-1.06 4.21-4.21 4.21" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m19.52 17.1-2.78-1.95V8.84l2.78-1.95c1.36-.95 2.48-.37 2.48 1.3v7.62c0 1.67-1.12 2.25-2.48 1.29M11.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Video);
export default ForwardRef;
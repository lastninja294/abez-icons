import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Location = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={1.5} d="M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z" /><path stroke="currentColor" strokeWidth={1.5} d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.194 5.194 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Location);
export default ForwardRef;
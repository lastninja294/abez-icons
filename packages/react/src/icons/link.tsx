import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Link = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.27 12A5.46 5.46 0 0 1 2 8.5C2 5.48 4.47 3 7.5 3h5C15.52 3 18 5.48 18 8.5S15.53 14 12.5 14H10" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.73 12A5.46 5.46 0 0 1 22 15.5c0 3.02-2.47 5.5-5.5 5.5h-5C8.48 21 6 18.52 6 15.5S8.47 10 11.5 10H14" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Link);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Drop = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeMiterlimit={10} strokeWidth={1.5} d="M12.61 2.21a.99.99 0 0 0-1.22 0C9.49 3.66 3.88 8.39 3.91 13.9c0 4.46 3.63 8.1 8.1 8.1s8.1-3.63 8.1-8.09c.01-5.43-5.61-10.24-7.5-11.7Z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Drop);
export default ForwardRef;
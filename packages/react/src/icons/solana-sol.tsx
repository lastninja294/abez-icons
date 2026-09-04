import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SolanaSol = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="M20 3.5H5.5c-.3 0-.6.1-.8.4l-1.5 2A1 1 0 0 0 4 7.5h14.5c.3 0 .6-.1.8-.4l1.5-2a1 1 0 0 0-.8-1.6ZM4 10h14.5c.3 0 .6.1.8.4l1.5 2A1 1 0 0 1 20 14H5.5c-.3 0-.6-.1-.8-.4l-1.5-2A1 1 0 0 1 4 10Zm16 6.5H5.5c-.3 0-.6.1-.8.4l-1.5 2a1 1 0 0 0 .8 1.6h14.5c.3 0 .6-.1.8-.4l1.5-2a1 1 0 0 0-.8-1.6Z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(SolanaSol);
export default ForwardRef;
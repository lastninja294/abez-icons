import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FtxTokenFtt = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M21 2H9c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1m-9 15H7v5h5zM7 9.5H2v5h5zm11 .1H9.5v4.7H18z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(FtxTokenFtt);
export default ForwardRef;
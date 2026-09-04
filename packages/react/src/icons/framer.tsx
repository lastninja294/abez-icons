import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Framer = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m5 2 14 14H5V9h14V2zm7 14v6l-7-6z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Framer);
export default ForwardRef;
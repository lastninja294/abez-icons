import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WingWing = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M16 5h3.5l2.7 4.7L17 19l-1.9-3.1 3.6-6.2zM9 5h3.5l2.7 4.7L10 19l-1.9-3.1 3.6-6.2zM1.8 5h3.5L8 9.8l-1.7 2.9z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(WingWing);
export default ForwardRef;
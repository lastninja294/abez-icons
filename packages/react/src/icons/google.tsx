import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Google = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M15.2 3H8.8L1.4 15.7 4.6 21h14.8s3.2-5.5 3.2-5.4S15.2 3 15.2 3M8.8 3l10.6 18M15.2 3 4.6 21m-3.1-5.3H22" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Google);
export default ForwardRef;
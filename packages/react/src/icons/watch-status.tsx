import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WatchStatus = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M8.5 19h7c2.33 0 3.5-1.17 3.5-3.5v-7C19 6.17 17.83 5 15.5 5h-7C6.17 5 5 6.17 5 8.5v7C5 17.83 6.17 19 8.5 19M16 2H8m8 20H8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v-4m3 4v-2m-6 2v-1" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(WatchStatus);
export default ForwardRef;
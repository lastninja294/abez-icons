import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Slash = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10m6.9-17-14 14" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Slash);
export default ForwardRef;
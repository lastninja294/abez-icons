import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Mask1Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5" /><path fill="currentColor" d="M12 7v10c-2.76 0-5-2.24-5-5s2.24-5 5-5" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Mask1Bold);
export default ForwardRef;
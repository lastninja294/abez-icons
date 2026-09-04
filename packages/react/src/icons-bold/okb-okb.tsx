import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const OkbOkbBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M17 7c0 2.76-2.24 5-5 5 2.76 0 5 2.24 5 5 2.76 0 5-2.24 5-5s-2.24-5-5-5" /><path fill="currentColor" d="M12 12c0 2.76-2.24 5-5 5 0 2.76 2.24 5 5 5s5-2.24 5-5c-2.76 0-5-2.24-5-5m0 0c0-2.76 2.24-5 5-5 0-2.76-2.24-5-5-5S7 4.24 7 7c2.76 0 5 2.24 5 5" /><path fill="currentColor" d="M12 12c-2.76 0-5-2.24-5-5-2.76 0-5 2.24-5 5s2.24 5 5 5c0-2.76 2.24-5 5-5" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(OkbOkbBold);
export default ForwardRef;
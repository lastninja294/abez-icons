import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChainlinkLinkBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M3 8.18v7.65c0 .65.46 1.43 1.03 1.75l7 3.89c.53.3 1.41.3 1.94 0l7-3.89c.57-.31 1.03-1.1 1.03-1.75V8.18c0-.65-.46-1.43-1.03-1.75l-7-3.89c-.53-.3-1.41-.3-1.94 0l-7 3.89C3.46 6.74 3 7.53 3 8.18" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(ChainlinkLinkBold);
export default ForwardRef;
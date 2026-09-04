import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DiamondsBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="m21.77 9.8-.8-1.8-1.76-3.96C18.74 3 18 2.15 16.3 2.15H7.7C6 2.15 5.26 3 4.79 4.04L3.03 8l-.8 1.8c-.46 1.05-.21 2.59.56 3.44l6.85 7.54c1.3 1.43 3.42 1.43 4.72 0l6.85-7.54c.77-.85 1.02-2.39.56-3.44" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(DiamondsBold);
export default ForwardRef;
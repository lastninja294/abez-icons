import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowBottomBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9.33 6h5.34c3.32 0 4.67 2.35 3.02 5.22l-.74 1.28c-.18.31-.51.5-.87.5H7.92c-.36 0-.69-.19-.87-.5l-.74-1.28C4.66 8.35 6.01 6 9.33 6m-.54 8h6.43c.39 0 .63.42.43.75l-.64 1.1c-1.65 2.87-4.37 2.87-6.02 0l-.64-1.1c-.19-.33.05-.75.44-.75" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(ArrowBottomBold);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EraserBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M21.03 22h-7.04a.749.749 0 1 1 0-1.5h7.04a.749.749 0 1 1 0 1.5m-7.39-5.31c.39.39.39 1.02 0 1.42l-2.98 2.98a3.027 3.027 0 0 1-4.07.18c-.07-.06-.13-.12-.19-.18l-.87-.87-1.79-1.79-.86-.86c-.07-.07-.13-.14-.19-.21a3.01 3.01 0 0 1 .19-4.04l2.98-2.98a.996.996 0 0 1 1.41 0zm7.48-6.05-5 5a.996.996 0 0 1-1.41 0L8.34 9.29c-.39-.39-.39-1.02 0-1.42l5-4.99a3.024 3.024 0 0 1 4.26 0l3.52 3.51a3.01 3.01 0 0 1 0 4.25" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(EraserBold);
export default ForwardRef;
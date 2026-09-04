import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EmercoinEmcBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5.25 14c0 .41-.34.75-.75.75h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8.25v-6.5h-2.5V12c0 .41-.34.75-.75.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.25v-2.5H7.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(EmercoinEmcBold);
export default ForwardRef;
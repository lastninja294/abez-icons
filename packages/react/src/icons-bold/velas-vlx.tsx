import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VelasVlxBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M21 3.15H3c-.41 0-.75.34-.75.75s.34.75.75.75h18c.41 0 .75-.34.75-.75s-.34-.75-.75-.75M4.04 6.24h15.93c.88 0 1.41.97.93 1.71l-7.96 12.39c-.44.68-1.43.68-1.87 0L3.11 7.95c-.48-.74.05-1.71.93-1.71" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(VelasVlxBold);
export default ForwardRef;
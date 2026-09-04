import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChartBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M21 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75M5.6 8.38H4c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V9.38c0-.56-.45-1-1-1m7.2-3.19h-1.6c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V6.19c0-.55-.45-1-1-1M20 2h-1.6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1H20c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(ChartBold);
export default ForwardRef;
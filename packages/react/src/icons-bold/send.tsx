import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SendBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M20.5 21.25h-17c-.41 0-.75.34-.75.75s.34.75.75.75h17c.41 0 .75-.34.75-.75s-.34-.75-.75-.75M5 14.52c.41 0 .75-.34.75-.75V5.31l12.72 12.72c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06L6.81 4.25h8.46c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H5c-.1 0-.19.02-.29.06-.18.07-.33.22-.4.4-.04.1-.06.19-.06.29v10.27c0 .41.34.75.75.75" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(SendBold);
export default ForwardRef;
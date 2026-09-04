import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Candle2Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M22.75 17.5c0 .41-.34.75-.75.75h-7v.25c0 1.5-.9 2-2 2H7c-1.1 0-2-.5-2-2v-.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3v-.25c0-1.5.9-2 2-2h6c1.1 0 2 .5 2 2v.25h7c.41 0 .75.34.75.75m0-11c0 .41-.34.75-.75.75h-3v.25c0 1.5-.9 2-2 2h-6c-1.1 0-2-.5-2-2v-.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7V5.5c0-1.5.9-2 2-2h6c1.1 0 2 .5 2 2v.25h3c.41 0 .75.34.75.75" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Candle2Bold);
export default ForwardRef;
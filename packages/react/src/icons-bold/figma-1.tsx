import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Figma1Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 12c0-1.1.9-2 2-2h-2z" /><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m4 10c0 1.1-.9 2-2 2s-2-.9-2-2v4c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c-1.1 0-2-.9-2-2s.9-2 2-2c-1.1 0-2-.9-2-2s.9-2 2-2h4c1.1 0 2 .9 2 2s-.9 2-2 2c1.1 0 2 .9 2 2" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Figma1Bold);
export default ForwardRef;
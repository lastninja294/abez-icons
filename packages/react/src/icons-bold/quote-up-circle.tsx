import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const QuoteUpCircleBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-.39 9.84c0 3.08-.67 3.77-2.46 4.83-.12.07-.25.1-.38.1-.26 0-.51-.13-.65-.37a.76.76 0 0 1 .26-1.03c1.21-.72 1.63-.98 1.71-2.79h-1.9c-1.09 0-1.94-.85-1.94-1.94V9.16c0-1.09.85-1.94 1.94-1.94h1.49c1.07 0 1.94.87 1.94 1.94v2.68zm6.14 0c0 3.08-.67 3.77-2.46 4.83-.12.07-.25.1-.38.1-.26 0-.51-.13-.65-.37a.76.76 0 0 1 .26-1.03c1.21-.72 1.63-.98 1.71-2.79h-1.91c-1.09 0-1.94-.85-1.94-1.94V9.16c0-1.09.85-1.94 1.94-1.94h1.49c1.07 0 1.94.87 1.94 1.94z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(QuoteUpCircleBold);
export default ForwardRef;
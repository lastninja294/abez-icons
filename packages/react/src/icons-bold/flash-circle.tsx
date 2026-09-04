import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FlashCircleBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m3.53 11.23-5.18 3.59c-.76.53-1.2.22-.98-.67l.95-3.84-1.65-.41c-.75-.18-.84-.7-.21-1.14l5.18-3.59c.76-.53 1.2-.22.98.67l-.95 3.84 1.65.41c.75.19.84.7.21 1.14" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(FlashCircleBold);
export default ForwardRef;
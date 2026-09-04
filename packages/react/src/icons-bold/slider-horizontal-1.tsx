import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SliderHorizontal1Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M3.5 5.06v13.88c0 .41-.34.75-.75.75S2 19.35 2 18.94V5.06c0-.41.34-.75.75-.75s.75.34.75.75m18.5 0v13.88c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.06c0-.41.34-.75.75-.75s.75.34.75.75M8 21.25h8c1.66 0 3-1.34 3-3V5.75c0-1.66-1.34-3-3-3H8c-1.66 0-3 1.34-3 3v12.5c0 1.66 1.34 3 3 3" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(SliderHorizontal1Bold);
export default ForwardRef;
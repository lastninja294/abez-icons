import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MessageQuestion = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M17 18.43h-4l-4.45 2.96A.997.997 0 0 1 7 20.56v-2.13c-3 0-5-2-5-5v-6c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11.36v-.21c0-.68.42-1.04.84-1.33.41-.28.82-.64.82-1.3 0-.92-.74-1.66-1.66-1.66s-1.66.74-1.66 1.66m1.656 5.23h.008" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(MessageQuestion);
export default ForwardRef;
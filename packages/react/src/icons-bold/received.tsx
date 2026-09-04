import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ReceivedBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4.71 18.19c.1.04.19.06.29.06h10.27c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H6.81L19.53 4.03c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0L5.75 15.69V7.23c0-.41-.34-.75-.75-.75s-.75.34-.75.75V17.5c0 .1.02.19.06.29.07.18.22.33.4.4m15.79 3.06h-17c-.41 0-.75.34-.75.75s.34.75.75.75h17c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(ReceivedBold);
export default ForwardRef;
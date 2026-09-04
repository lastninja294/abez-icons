import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const UserBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0 2.5c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18c.28 0 .5-.22.5-.5 0-4.14-4.08-7.5-9.09-7.5" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(UserBold);
export default ForwardRef;
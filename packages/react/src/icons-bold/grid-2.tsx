import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Grid2Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11.25 12.75V22H7.81C4.17 22 2 19.83 2 16.19v-3.44zM22 7.81v3.44h-9.25V2h3.44C19.83 2 22 4.17 22 7.81M11.25 2v9.25H2V7.81C2 4.17 4.17 2 7.81 2zM22 12.75v3.44c0 3.64-2.17 5.81-5.81 5.81h-3.44v-9.25z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Grid2Bold);
export default ForwardRef;
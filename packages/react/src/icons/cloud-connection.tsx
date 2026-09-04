import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CloudConnection = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M6.37 9.51c-4.08.29-4.07 6.2 0 6.49h9.66c1.17.01 2.3-.43 3.17-1.22 2.86-2.5 1.33-7.5-2.44-7.98C15.41-1.34 3.62 1.75 6.41 9.51M12 16v3m0 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4m6-2h-4m-4 0H6" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(CloudConnection);
export default ForwardRef;
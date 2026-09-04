import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArchiveSlash = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 2 2 22M20.68 8.71v11c0 2.01-1.44 2.86-3.2 1.88L11 17.54m-7.68 2.41V5.86C3.32 3.74 5.05 2 7.18 2h9.65c1.21 0 2.29.56 3 1.44" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(ArchiveSlash);
export default ForwardRef;
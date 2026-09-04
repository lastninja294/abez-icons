import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Import3Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M21.14 9.9h-8.46v3.67L14.25 12c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.85 2.84c-.29.29-.77.29-1.06 0l-2.85-2.84a.74.74 0 0 1-.22-.53c0-.19.08-.38.23-.53.29-.29.77-.29 1.06 0l1.56 1.56V9.9H2.86c-.48 0-.86.38-.86.86 0 5.89 4.11 10 10 10s10-4.11 10-10c0-.48-.38-.86-.86-.86m-8.46-5.91c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5.9h1.5z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Import3Bold);
export default ForwardRef;
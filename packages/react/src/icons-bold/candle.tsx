import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CandleBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7.5 4.5h-.25V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.5H5.5C3.91 4.5 3 5.41 3 7v6c0 1.59.91 2.5 2.5 2.5h.25V22c0 .41.34.75.75.75s.75-.34.75-.75v-6.5h.25c1.59 0 2.5-.91 2.5-2.5V7c0-1.59-.91-2.5-2.5-2.5m11 4h-.25V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v6.5h-.25c-1.59 0-2.5.91-2.5 2.5v6c0 1.59.91 2.5 2.5 2.5h.25V22c0 .41.34.75.75.75s.75-.34.75-.75v-2.5h.25c1.59 0 2.5-.91 2.5-2.5v-6c0-1.59-.91-2.5-2.5-2.5" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(CandleBold);
export default ForwardRef;
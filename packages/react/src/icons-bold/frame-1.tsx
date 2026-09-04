import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Frame1Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8.02 4.62H6.98c-1.59 0-2.23.6-2.23 2.12v11.88h5.5V6.74c-.01-1.52-.65-2.12-2.23-2.12m8.5 5h-1.04c-1.59 0-2.23.61-2.23 2.12v6.88h5.5v-6.88c0-1.51-.65-2.12-2.23-2.12" /><path fill="currentColor" d="M2.75 17.88h18.5c.41 0 .75.34.75.75s-.34.75-.75.75H2.75c-.41 0-.75-.34-.75-.76s.34-.74.75-.74" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Frame1Bold);
export default ForwardRef;
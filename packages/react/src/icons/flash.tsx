import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Flash = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M9.32 13.28h3.09v7.2c0 1.06 1.32 1.56 2.02.76l7.57-8.6c.66-.75.13-1.92-.87-1.92h-3.09v-7.2c0-1.06-1.32-1.56-2.02-.76l-7.57 8.6c-.65.75-.12 1.92.87 1.92M8.5 4h-7m6 16h-6m3-8h-3" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Flash);
export default ForwardRef;
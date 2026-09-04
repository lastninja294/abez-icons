import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FlashSlash = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M9.18 18.04v2.44c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-.93m-2.15-1.88V3.52c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.93 1.05-.54 1.92.87 1.92h3.09v1.18" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 2 2 22" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(FlashSlash);
export default ForwardRef;
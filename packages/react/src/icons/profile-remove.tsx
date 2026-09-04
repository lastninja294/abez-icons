import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ProfileRemove = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 19h-4m-3.35-8.13c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C7.55 3.99 9.53 2 11.99 2a4.435 4.435 0 0 1 .16 8.87m-.16 10.94c-1.82 0-3.63-.46-5.01-1.38-2.42-1.62-2.42-4.26 0-5.87 2.75-1.84 7.26-1.84 10.01 0" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(ProfileRemove);
export default ForwardRef;
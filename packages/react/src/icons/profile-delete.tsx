import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ProfileDelete = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m18.41 18.09-2.82 2.82m2.82 0-2.82-2.82m-3.43-7.22c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C7.56 3.99 9.54 2 12 2a4.435 4.435 0 0 1 .16 8.87M12 21.81c-1.82 0-3.63-.46-5.01-1.38-2.42-1.62-2.42-4.26 0-5.87 2.75-1.84 7.26-1.84 10.01 0" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(ProfileDelete);
export default ForwardRef;
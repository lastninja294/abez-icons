import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ProfileTick = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m14.44 19.05 1.52 1.52L19 17.53m-6.84-6.66c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43A4.43 4.43 0 0 1 11.99 2c2.45 0 4.44 1.99 4.44 4.44 0 2.4-1.9 4.35-4.27 4.43m-.17 10.94c-1.82 0-3.63-.46-5.01-1.38-2.42-1.62-2.42-4.26 0-5.87 2.75-1.84 7.26-1.84 10.01 0" /></svg>;
const ForwardRef = forwardRef(ProfileTick);
export default ForwardRef;
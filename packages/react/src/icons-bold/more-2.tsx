import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const More2Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M8.31 16.31C7.59 16.31 7 15.72 7 15s.59-1.31 1.31-1.31 1.31.59 1.31 1.31-.59 1.31-1.31 1.31m3.69-6c-.72 0-1.31-.59-1.31-1.31s.59-1.31 1.31-1.31 1.31.59 1.31 1.31-.59 1.31-1.31 1.31m3.69 6c-.72 0-1.31-.59-1.31-1.31s.59-1.31 1.31-1.31S17 14.28 17 15s-.59 1.31-1.31 1.31" opacity={0.97} /></svg>;
const ForwardRef = forwardRef(More2Bold);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Setting4Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M21.3 7.58h-5.58c-.39 0-.7-.31-.7-.7s.31-.7.7-.7h5.58c.39 0 .7.31.7.7s-.31.7-.7.7m-14.88 0H2.7c-.39 0-.7-.31-.7-.7s.31-.7.7-.7h3.72c.39 0 .7.31.7.7s-.32.7-.7.7" /><path fill="currentColor" d="M10.14 10.83a3.95 3.95 0 1 0 0-7.9 3.95 3.95 0 0 0 0 7.9m11.16 6.98h-3.72c-.39 0-.7-.31-.7-.7s.31-.7.7-.7h3.72c.39 0 .7.31.7.7s-.31.7-.7.7m-13.02 0H2.7c-.39 0-.7-.31-.7-.7s.31-.7.7-.7h5.58c.39 0 .7.31.7.7s-.32.7-.7.7" /><path fill="currentColor" d="M13.86 21.07a3.95 3.95 0 1 0 0-7.9 3.95 3.95 0 0 0 0 7.9" /></svg>;
const ForwardRef = forwardRef(Setting4Bold);
export default ForwardRef;
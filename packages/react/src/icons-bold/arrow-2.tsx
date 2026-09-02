import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Arrow2Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M21.75 6.73c0-.2-.08-.39-.22-.53l-3.72-3.72a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l2.45 2.45H3c-.41 0-.75.34-.75.75s.34.74.75.74h16.19l-2.44 2.44c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3.71-3.71c.07-.07.13-.16.17-.26 0-.01 0-.02.01-.03.03-.08.05-.16.05-.25M21 16.52H4.81l2.44-2.44c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-3.71 3.71c-.07.07-.13.16-.17.26 0 .01 0 .02-.01.03-.03.08-.05.17-.05.26 0 .2.08.39.22.53l3.72 3.72c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06L4.8 18.02H21c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" /></svg>;
const ForwardRef = forwardRef(Arrow2Bold);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const House2Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M10 15.5c-.41 0-.75.34-.75.75v1.5c0 .41.34.75.75.75s.75-.34.75-.75v-1.5c0-.41-.34-.75-.75-.75" /><path fill="currentColor" d="M22 21.25h-1V9.98c0-.62-.28-1.2-.77-1.58l-7-5.44c-.72-.57-1.74-.57-2.46 0l-7 5.44c-.49.38-.77.96-.77 1.57l-.05 11.28H2a.749.749 0 1 0 0 1.5h20a.749.749 0 1 0 0-1.5M10.5 6.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75m6.5 14.5H7V12.5c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5z" /></svg>;
const ForwardRef = forwardRef(House2Bold);
export default ForwardRef;
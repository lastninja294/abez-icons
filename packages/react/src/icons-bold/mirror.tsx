import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MirrorBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m6 4.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75" /></svg>;
const ForwardRef = forwardRef(MirrorBold);
export default ForwardRef;
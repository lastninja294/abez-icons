import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TextalignRightBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M21 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75m0 5h-9.47c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H21c.41 0 .75.34.75.75s-.34.75-.75.75m0 5H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75m0 5h-9.47c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H21c.41 0 .75.34.75.75s-.34.75-.75.75" /></svg>;
const ForwardRef = forwardRef(TextalignRightBold);
export default ForwardRef;
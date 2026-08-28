import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TextalignJustifyright = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5h9m-9 5h9m-18 5h18m-18 5h18" /></svg>;
const ForwardRef = forwardRef(TextalignJustifyright);
export default ForwardRef;
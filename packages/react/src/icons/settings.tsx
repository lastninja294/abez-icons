import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Settings = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M2 12h5m10 0h5" /></svg>;
const ForwardRef = forwardRef(Settings);
export default ForwardRef;
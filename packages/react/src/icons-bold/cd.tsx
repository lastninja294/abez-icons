import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CdBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 12.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5" /></svg>;
const ForwardRef = forwardRef(CdBold);
export default ForwardRef;
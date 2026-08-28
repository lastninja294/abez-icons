import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Sagittarius = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3h9v9m0-9L3 21M6.6 6.6l10.8 10.8" /></svg>;
const ForwardRef = forwardRef(Sagittarius);
export default ForwardRef;
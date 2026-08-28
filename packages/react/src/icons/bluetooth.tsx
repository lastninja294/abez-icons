import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Bluetooth = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M5.64 18.64 17.99 7.32c.51-.47.5-1.22-.04-1.67L14.1 2.44c-1-.83-1.82-.45-1.82.85v17.42c0 1.3.82 1.68 1.82.85l3.85-3.21c.54-.45.55-1.2.04-1.67L5.64 5.36" /></svg>;
const ForwardRef = forwardRef(Bluetooth);
export default ForwardRef;
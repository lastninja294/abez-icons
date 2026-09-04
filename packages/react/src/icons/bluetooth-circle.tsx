import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BluetoothCircle = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m8.59 15.56 6.62-6.07a.57.57 0 0 0-.02-.89l-2.06-1.72c-.54-.45-.97-.24-.97.46v9.33c0 .7.44.9.97.46l2.06-1.72c.29-.24.3-.64.02-.89L8.59 8.45" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(BluetoothCircle);
export default ForwardRef;
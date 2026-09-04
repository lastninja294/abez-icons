import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AutonioNiox = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeMiterlimit={10} strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m12 5.9-2.6 4.2h5.2zm-3.4 6L6 16.1h5.1zm6.8 0-2.5 4.2H18z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(AutonioNiox);
export default ForwardRef;
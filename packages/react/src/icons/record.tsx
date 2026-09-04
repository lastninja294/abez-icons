import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Record = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Record);
export default ForwardRef;
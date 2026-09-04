import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const NoteText = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M8 2v3m8-3v3m5 3.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5M8 11h8m-8 5h4" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(NoteText);
export default ForwardRef;
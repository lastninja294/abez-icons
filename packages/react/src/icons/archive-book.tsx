import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArchiveBook = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M15.5 2v7.86c0 .44-.52.66-.84.37l-2.32-2.14a.496.496 0 0 0-.68 0l-2.32 2.14c-.32.29-.84.07-.84-.37V2zm-2.25 12h4.25M9 18h8.5" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(ArchiveBook);
export default ForwardRef;
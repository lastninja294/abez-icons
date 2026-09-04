import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FolderMinus = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M14.43 14.55h-5" /><path stroke="currentColor" strokeMiterlimit={10} strokeWidth={1.5} d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(FolderMinus);
export default ForwardRef;
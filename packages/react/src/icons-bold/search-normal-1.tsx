import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SearchNormal1Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19m9.8 1c-.18 0-.36-.07-.49-.2l-1.86-1.86a.706.706 0 0 1 0-.99c.27-.27.71-.27.99 0l1.86 1.86c.27.27.27.71 0 .99-.14.13-.32.2-.5.2" /></svg>;
const ForwardRef = forwardRef(SearchNormal1Bold);
export default ForwardRef;
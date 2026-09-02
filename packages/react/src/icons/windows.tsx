import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Windows = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M22 2 12 4v7h10zm0 20-10-2v-7h10zM10 4.3 2 6v5h8zm0 15.4L2 18v-5h8z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Windows);
export default ForwardRef;
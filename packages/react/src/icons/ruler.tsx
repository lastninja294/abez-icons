import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Ruler = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><g stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} clipPath="url(#a)"><path d="M5 17h14q3 0 3-3v-4q0-3-3-3H5q-3 0-3 3v4q0 3 3 3ZM18 7v5M6 7v4m4.05-4L10 12m4-5v3" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Ruler);
export default ForwardRef;
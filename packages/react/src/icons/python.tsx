import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Python = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.6 7.6V3.9c0-.8.6-1.5 1.4-1.7q3-.45 6 0c.8.1 1.4.8 1.4 1.7v5.9c0 1.2-1 2.2-2.2 2.2H9.8c-1.2 0-2.2 1-2.2 2.2v5.9c0 .8.6 1.5 1.4 1.7q3 .45 6 0c.8-.1 1.4-.8 1.4-1.7v-3.7" /><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.4 7.6h3.7c.8 0 1.5.6 1.7 1.4q.45 3 0 6c-.1.8-.8 1.4-1.7 1.4H12m0-8.8H3.9c-.8 0-1.5.6-1.7 1.4q-.45 3 0 6c.1.8.8 1.4 1.7 1.4h3.7m6.4 2.75" /></svg>;
const ForwardRef = forwardRef(Python);
export default ForwardRef;
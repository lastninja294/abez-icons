import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Export3Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M16.8 9h-4.05v6.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9H7.2C4 9 2 11 2 14.2v2.59C2 20 4 22 7.2 22h9.59c3.2 0 5.2-2 5.2-5.2v-2.6C22 11 20 9 16.8 9m-4.05-4.44 2.07 2.07c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-3.35-3.35a.754.754 0 0 0-1.06 0L8.12 5.57c-.29.29-.29.77 0 1.06s.77.29 1.06 0l2.07-2.07V9h1.5z" /></svg>;
const ForwardRef = forwardRef(Export3Bold);
export default ForwardRef;
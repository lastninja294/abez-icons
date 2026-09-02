import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const NexoNexo = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m12 6 5-3 5 3v12l-5 3-10-6V9l10 6V9z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M12 6 7 3 2 6v12l5 3 4.7-3.13" /></svg>;
const ForwardRef = forwardRef(NexoNexo);
export default ForwardRef;
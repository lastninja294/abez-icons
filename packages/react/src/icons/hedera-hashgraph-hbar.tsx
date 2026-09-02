import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HederaHashgraphHbar = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#17191C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M8.2 16.5v-9m7.6 9v-9m-7.6 2.6h7.6m-7.6 3.8h7.6M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /></svg>;
const ForwardRef = forwardRef(HederaHashgraphHbar);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SearchStatus1Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11 1.99c-4.97 0-9.01 4.04-9.01 9.01s4.04 9.01 9.01 9.01 9.01-4.04 9.01-9.01S15.97 1.99 11 1.99m0 11.26H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75m3-3H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75m7.99 8.7c-.33-.61-1.03-.95-1.97-.95-.71 0-1.32.29-1.68.79s-.44 1.17-.22 1.84c.43 1.3 1.18 1.59 1.59 1.64.06.01.12.01.19.01.44 0 1.12-.19 1.78-1.18.53-.77.63-1.54.31-2.15" /></svg>;
const ForwardRef = forwardRef(SearchStatus1Bold);
export default ForwardRef;
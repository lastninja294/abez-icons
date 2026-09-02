import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TetherUsdtBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="m21.71 9.9-2.4-4.82c-.47-.95-1.72-1.72-2.78-1.72H7.47c-1.06 0-2.31.77-2.78 1.72L2.29 9.9c-.58 1.16-.26 2.81.69 3.68l6.93 6.29c1.15 1.04 3.02 1.04 4.17 0l6.93-6.29c.96-.87 1.28-2.53.7-3.68M16 9.25h-3.25v5.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75" /></svg>;
const ForwardRef = forwardRef(TetherUsdtBold);
export default ForwardRef;
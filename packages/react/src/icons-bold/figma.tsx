import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FigmaBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 2H8.67C6.83 2 5.34 3.49 5.34 5.33s1.49 3.33 3.33 3.33H12zm0 6.67H8.67c-1.84 0-3.33 1.49-3.33 3.33s1.49 3.33 3.33 3.33H12zm0 6.66H8.67c-1.84 0-3.33 1.49-3.33 3.33s1.49 3.33 3.33 3.33S12 20.5 12 18.66zM12 2h3.33c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33H12zm3.33 6.67c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33S12 13.84 12 12s1.49-3.33 3.33-3.33" /></svg>;
const ForwardRef = forwardRef(FigmaBold);
export default ForwardRef;
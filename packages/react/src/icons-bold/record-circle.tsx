import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RecordCircleBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11.97 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10M12 16.23c-2.34 0-4.23-1.89-4.23-4.23S9.66 7.77 12 7.77s4.23 1.89 4.23 4.23-1.89 4.23-4.23 4.23" /></svg>;
const ForwardRef = forwardRef(RecordCircleBold);
export default ForwardRef;
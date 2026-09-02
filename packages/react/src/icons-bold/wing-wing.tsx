import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WingWingBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M16.86 5h2.35c.18 0 .34.1.43.25l2.41 4.2c.09.15.09.34 0 .49l-4.64 8.3c-.19.34-.67.34-.87.01l-1.26-2.11a.5.5 0 0 1 0-.5l3.26-5.7c.09-.15.09-.34 0-.5l-2.13-3.7c-.17-.32.07-.74.45-.74m-7 0h2.35c.18 0 .34.1.43.25l2.41 4.2c.09.15.09.34 0 .49l-4.64 8.3c-.19.34-.67.34-.87.01l-1.26-2.11a.5.5 0 0 1 0-.5l3.26-5.7c.09-.15.09-.34 0-.5l-2.13-3.7c-.17-.32.07-.74.45-.74M1.8 5h3.21c.18 0 .35.1.44.25l2.42 4.29c.09.15.09.34 0 .5l-1.12 1.92c-.19.33-.67.33-.86 0z" /></svg>;
const ForwardRef = forwardRef(WingWingBold);
export default ForwardRef;
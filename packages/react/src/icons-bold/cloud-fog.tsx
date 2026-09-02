import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CloudFogBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M19.8 12H4.2c-.22 0-.42-.15-.49-.36C.96 2.55 14.84-.94 16.45 8.82c1.66.21 2.97 1.15 3.78 2.41.21.33-.04.77-.43.77m.2 3.78H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16c.41 0 .75.34.75.75s-.34.75-.75.75m-2 3H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75m-3 3H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75" /></svg>;
const ForwardRef = forwardRef(CloudFogBold);
export default ForwardRef;
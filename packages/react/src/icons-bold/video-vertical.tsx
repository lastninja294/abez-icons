import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VideoVerticalBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6.36 7.78H2v3.47h4.36zm0-1.49V2.13c-2.28.42-3.77 1.89-4.21 4.15h4.18c.01 0 .02.01.03.01m0 10.02v-3.56H2v3.53h4.24c.04 0 .08.02.12.03M21.85 6.28c-.43-2.19-1.83-3.63-3.99-4.1v4.1zm-5.49 4.97V2.01C16.31 2 16.25 2 16.19 2H7.86v9.25zm5.64 1.5h-4.14v3.53H22zm-4.14 9.07c2.14-.47 3.54-1.89 3.98-4.04h-3.98zM6.24 17.78H2.16c.46 2.22 1.94 3.67 4.2 4.09v-4.11c-.04.01-.08.02-.12.02M22 7.78h-4.14v3.47H22zM7.86 12.75V22h8.33c.06 0 .12 0 .17-.01v-9.24z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(VideoVerticalBold);
export default ForwardRef;
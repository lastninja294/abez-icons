import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Link1Bold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M15.41 18.59c-.4 0-.73-.33-.73-.73s.33-.73.73-.73c2.82 0 5.12-2.3 5.12-5.12s-2.3-5.12-5.12-5.12a5.13 5.13 0 0 0-5.12 5.12c0 .4-.33.73-.73.73s-.73-.33-.73-.73c0-3.63 2.95-6.59 6.59-6.59S22 8.37 22 12s-2.95 6.59-6.59 6.59" /><path fill="currentColor" d="M8.59 5.41c.4 0 .73.33.73.73s-.33.73-.73.73a5.13 5.13 0 0 0-5.12 5.12c0 2.82 2.3 5.12 5.12 5.12s5.12-2.3 5.12-5.12c0-.4.33-.73.73-.73s.73.33.73.73c0 3.63-2.95 6.59-6.59 6.59S2 15.63 2 12s2.95-6.59 6.59-6.59" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Link1Bold);
export default ForwardRef;
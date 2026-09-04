import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AutonioNioxBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1.3 14.14H6.44a.25.25 0 0 1-.21-.38l2.13-3.55c.1-.16.33-.16.43 0l2.13 3.55c.1.17-.02.38-.22.38m-.83-6a.25.25 0 0 1-.21-.38l2.13-3.55c.1-.16.33-.16.43 0l2.13 3.55c.1.17-.02.38-.21.38zm7.69 6H13.3a.25.25 0 0 1-.21-.38l2.13-3.55c.1-.16.33-.16.43 0l2.13 3.55c.09.17-.03.38-.22.38" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(AutonioNioxBold);
export default ForwardRef;
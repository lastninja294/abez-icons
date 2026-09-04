import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TrontronTrxBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M19.402 10.53c.52-.1.88.49.56.91l-6.95 8.85c-.35.45-1.07.16-1.01-.4l.7-7.6c.02-.25.21-.46.46-.51zm2.238-2.84c.22.24.1.63-.21.7l-8.44 1.69c-.55.11-.91-.56-.51-.96L17.5 4.1c.23-.23.6-.22.82.01zm-6.949-4.5c.47.06.66.63.33.97l-3.56 3.56c-.21.21-.55.22-.78.02l-5.34-4.75c-.42-.37-.1-1.06.45-.99zm-3.971 6.88c.27.24.4.59.38.94l-.86 10.46c-.05.6-.88.72-1.1.16L2.29 3.96c-.22-.56.46-1.03.91-.63z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(TrontronTrxBold);
export default ForwardRef;
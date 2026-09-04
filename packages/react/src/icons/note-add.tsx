import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const NoteAdd = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M9.56 18v-5M12 15.5H7M8 2v3m8-3v3m-.19-1.58c3.34.12 5.03 1.35 5.13 6.05l.13 6.17c.08 4.12-.87 6.19-5.87 6.3l-6 .12c-5 .1-6.04-1.94-6.12-6.05l-.14-6.18c-.1-4.7 1.55-6 4.87-6.25z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(NoteAdd);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Path = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} clipPath="url(#a)"><path d="m19.79 7.27-3.03-3.03c-1.15-1.15-2.72-1.09-3.49.14l-1.69 2.67 5.4 5.4 2.67-1.69c1.15-.73 1.22-2.41.14-3.49" /><path d="m11.58 7.05-3.93-.24c-2.19-.13-2.96.54-3.2 2.63l-.98 8.32c-.21 1.75 1.06 3.01 2.8 2.8l8.32-.98c2.09-.25 2.85-1.01 2.63-3.2l-.23-3.93M4.61 19.42l3.03-3.04" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Path);
export default ForwardRef;
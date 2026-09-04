import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Microscope = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m15.03 10.77 5.66-3.79c.57-.38.72-1.16.34-1.72l-1.82-2.71c-.38-.57-1.16-.72-1.72-.34L11.83 6z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m12.174 6.48-4.778 3.2 2.56 3.821 4.778-3.2zM5.83 15.9l3.95-2.64-2.24-3.34-3.95 2.64c-.46.31-.58.93-.27 1.39l1.13 1.68c.3.45.92.57 1.38.27m6.22-3.7L7.56 22M12 12.2l4.44 9.8" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(Microscope);
export default ForwardRef;
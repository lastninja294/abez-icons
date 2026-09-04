import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const OntologyOntBold = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M17.9 19.68A9.4 9.4 0 0 1 11.42 22c-5.17-.14-9.2-4.59-9.2-9.76V5.21c0-.45.54-.67.85-.35zM6.22 4.3A9.33 9.33 0 0 1 12.65 2c5.13.14 9.12 4.55 9.12 9.68v6.96c0 .45-.54.67-.85.35z" /></svg>;
const ForwardRef = /* @__PURE__ */ forwardRef(OntologyOntBold);
export default ForwardRef;
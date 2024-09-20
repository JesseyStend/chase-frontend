import React from "react";

const DutchFlag = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGSVGElement>
>(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    className={className}
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 6'>
    <rect fill='#21468B' width='9' height='6' />
    <rect fill='#FFF' width='9' height='4' />
    <rect fill='#AE1C28' width='9' height='2' />
  </svg>
));
DutchFlag.displayName = "DutchFlag";

export default DutchFlag;

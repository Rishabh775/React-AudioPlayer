import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export default function Box({ children, className }: BoxProps) {
  return <div className={twMerge(` h-fit w-full`, className)}>{children}</div>;
}

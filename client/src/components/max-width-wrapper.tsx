import { cn } from "../lib/utils";

interface MaxWidthWrapperProps {
  className: string;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <main className={cn("mx-auto max-w-screen-xl px-4 md:px-6 ", className)}>
      {children}
    </main>
  );
};
export default MaxWidthWrapper;

import { cn } from "@/utils";

type ErrorProps = {
  message: string;
  className?: string;
};

const Error = ({ message, className }: ErrorProps) => {
  return (
    <p className={cn("text-red-600 capitalize text-center mt-16", className)}>
      {message}
    </p>
  );
};

export default Error;

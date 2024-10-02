"use client";
import { useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FormSubmitProps {
  children: React.ReactNode;
  disable?: boolean;
  className: string;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "link"
    | "destructive";
}

export const FormSubmit = ({
  children,
  disable,
  className,
  variant,
}: FormSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending || disable}
      variant={variant}
      type={"submit"}
      size={"sm"}
      className={cn(className)}
    >
      {children}
    </Button>
  );
};

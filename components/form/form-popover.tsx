"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { createBoard } from "@/actions/creat-board";
import { useAction } from "@/hooks/use-action";

import { FormInput } from "./form-input";
import { FormSubmit } from "./form-submit";

interface FormPopover {
  children: React.ReactNode;
}

export const FormPopover = () => {
  return <div>hey</div>;
};

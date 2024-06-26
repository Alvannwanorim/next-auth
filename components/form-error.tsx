import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import React from "react";
interface FormErrorProps {
  message: string | undefined;
}
function FormError({ message }: FormErrorProps) {
  if (!message) return null;
  return (
    <div className="bg-destructive/15 rounded-md flex items-center gap-x-2 text-sm text-destructive p-3">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
}

export default FormError;

"use client";

import { getSession } from "@/actions/session";
import { UserRole } from "@prisma/client";
import { useEffect, useState } from "react";
import FormError from "../form-error";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
  role: UserRole | undefined;
}

export const RoleGate = ({ children, allowedRole, role }: RoleGateProps) => {
  if (role !== allowedRole) {
    return <FormError message="You not have permission to view this content" />;
  }

  return <>{children}</>;
};

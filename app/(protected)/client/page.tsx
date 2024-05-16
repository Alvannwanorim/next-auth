"use client";
import { getSession } from "@/actions/session";
import UserInfo from "@/components/auth/user-info";
import { ExtendedUser } from "@/next-auth";
import React, { useEffect, useState } from "react";

const ClientPage = () => {
  const [user, setUser] = useState<ExtendedUser>();

  useEffect(() => {
    getSession().then((data) => {
      if (data) setUser(data?.user);
    });
  }, []);
  return <UserInfo user={user} label="User Info" />;
};

export default ClientPage;

"use client";
import { logout } from "@/actions/logout";
import { getSession } from "@/actions/session";
import React, { useEffect, useState } from "react";

const SettingsPage = () => {
  const [user, setUser] = useState<any>(null);
  const onClick = () => {
    logout();
  };

  useEffect(() => {
    getSession().then((data) => setUser(data?.user));
  }, []);

  return (
    <div className="bg-white p-1">
      <button type="submit" onClick={onClick}>
        Sign out
      </button>
    </div>
  );
};

export default SettingsPage;

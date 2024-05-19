"use client";
import { logout } from "@/actions/logout";
import { getSession } from "@/actions/session";
import { settings } from "@/actions/settings";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React, { useEffect, useState, useTransition } from "react";
import { FcSettings } from "react-icons/fc";

const SettingsPage = () => {
  const [user, setUser] = useState<any>(null);
  const [isPending, startTransition] = useTransition();
  const onClick = () => {
    startTransition(() => {
      settings({
        name: "New Name",
      }).then;
    });
  };

  useEffect(() => {
    getSession().then((data) => setUser(data?.user));
  }, []);

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">
          <FcSettings /> Settings
        </p>
      </CardHeader>
      <CardContent>
        <Button>Update name</Button>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;

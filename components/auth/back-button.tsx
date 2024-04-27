"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  href: string;
  label: string;
}
function BackButton({ href, label }: BackButtonProps) {
  return (
    <Button variant="link" size="sm" className="font-normal w-full">
      <Link href={href}>{label}</Link>
    </Button>
  );
}

export default BackButton;

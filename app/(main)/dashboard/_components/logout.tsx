"use client";

import { logout } from "@/app/actions/auth";

export function LogoutButton() {
  return (
    <button
      onClick={() => logout()}
      className="text-red-500 hover:underline text-sm"
    >
      Logout
    </button>
  );
}

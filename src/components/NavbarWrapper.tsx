"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { SimpleWaitlistForm } from "@/components/ui/simple-waitlist-form";

export default function NavbarWrapper() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <Navbar onJoinWaitlist={() => setIsWaitlistOpen(true)} />
      <SimpleWaitlistForm 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </>
  );
}

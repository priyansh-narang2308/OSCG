"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const process = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        router.push("/sign-in");
        return;
      }

      if (data?.session) {
        router.push("/");
      } else {
        router.push("/sign-in");
      }
    };

    process();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      Finalizing login...
    </div>
  );
}

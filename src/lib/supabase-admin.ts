import "server-only";

import { createClient } from "@supabase/supabase-js";

class SupabaseAdminConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SupabaseAdminConfigurationError";
  }
}

function getSupabaseAdminEnv() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!supabaseUrl || !serviceRoleKey) {
    throw new SupabaseAdminConfigurationError(
      "Supabase visitor tracking is not configured.",
    );
  }

  return { supabaseUrl, serviceRoleKey };
}

export function createSupabaseAdminClient() {
  const { supabaseUrl, serviceRoleKey } = getSupabaseAdminEnv();

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}


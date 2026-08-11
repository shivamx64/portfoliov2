import "server-only";

import { createHash } from "node:crypto";

import type { NextRequest } from "next/server";

import { createSupabaseAdminClient } from "@/lib/supabase-admin";

const siteVisitorsTable = "site_visitors";

type SupabaseErrorLike = {
  code?: string;
  message?: string;
};

function getRequestIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const connectingIp = request.headers.get("cf-connecting-ip");

  return (
    forwardedFor?.split(",")[0]?.trim() ?? realIp?.trim() ?? connectingIp?.trim() ?? ""
  );
}

function getUtcDateKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function isDuplicateVisitorError(error: SupabaseErrorLike | null) {
  return error?.code === "23505";
}

export function hashVisitor(input: string) {
  return createHash("sha256").update(input).digest("hex");
}

export async function getVisitorCount(pagePath: string) {
  const supabase = createSupabaseAdminClient();

  const { count, error } = await supabase
    .from(siteVisitorsTable)
    .select("*", { count: "exact", head: true })
    .eq("page_path", pagePath);

  if (error) {
    throw new Error("Could not load visitor count.");
  }

  return count ?? 0;
}

export async function recordVisitor(pagePath: string, request: NextRequest) {
  const supabase = createSupabaseAdminClient();
  const userAgent = request.headers.get("user-agent") ?? null;
  const visitorHash = hashVisitor(
    [getRequestIp(request), userAgent ?? "", getUtcDateKey(), pagePath].join("|"),
  );

  const { error } = await supabase.from(siteVisitorsTable).insert({
    page_path: pagePath,
    visitor_hash: visitorHash,
    user_agent: userAgent,
  });

  if (error && !isDuplicateVisitorError(error)) {
    throw new Error("Could not record visitor.");
  }

  return getVisitorCount(pagePath);
}


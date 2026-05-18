import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0];
  let response: NextResponse;

  if (first) {
    const lower = first.toLowerCase();
    if (
      (lower === "physics" || lower === "chemistry" || lower === "biology") &&
      first !== lower
    ) {
      const url = request.nextUrl.clone();
      url.pathname = "/" + [lower, ...parts.slice(1)].join("/");
      response = NextResponse.redirect(url, 308);
      await refreshSupabaseSession(request, response);
      return response;
    }
  }

  response = NextResponse.next();
  await refreshSupabaseSession(request, response);
  return response;
}

async function refreshSupabaseSession(request: NextRequest, response: NextResponse) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) return;

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  await supabase.auth.getUser();
}

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/dashboard/:path*",
    "/onboarding",
    "/onboarding/:path*",
    "/subscribe",
    "/subscribe/:path*",
    "/pick",
    "/pick/:path*",
    "/login",
    "/signup",
    "/forgot-password",
    "/auth/:path*",
    "/api/:path*",
    "/physics/:path*",
    "/chemistry/:path*",
    "/biology/:path*",
  ],
};

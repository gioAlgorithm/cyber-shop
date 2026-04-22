import { DEFAULT_LOCALE, SUPPORTED_LOCALES, isSupportedLocale } from "@/locale/i18n";
import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.[^/]+$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (!firstSegment) {
    const url = request.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}`;
    return NextResponse.redirect(url, 308);
  }

  if (isSupportedLocale(firstSegment)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", firstSegment);
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  const matchedLocale = SUPPORTED_LOCALES.find(
    (locale) => locale.toLowerCase() === firstSegment.toLowerCase(),
  );
  const locale = matchedLocale ?? DEFAULT_LOCALE;
  const restPath = matchedLocale ? segments.slice(1) : segments;
  const normalizedPath = restPath.length > 0 ? `/${restPath.join("/")}` : "";

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${normalizedPath}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};

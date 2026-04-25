"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Link>, "prefetch"> & {
  prefetchOnIntent?: boolean;
};

function hrefToString(href: Props["href"]): string {
  if (typeof href === "string") return href;
  const pathname = href.pathname ?? "";
  const query = href.query
    ? `?${new URLSearchParams(
        Object.entries(href.query).flatMap(([key, value]) => {
          if (value === undefined) return [];
          if (Array.isArray(value)) return value.map((item) => [key, String(item)]);
          return [[key, String(value)]];
        }),
      ).toString()}`
    : "";
  const hash = href.hash ? `#${href.hash}` : "";
  return `${pathname}${query}${hash}`;
}

export default function IntentPrefetchLink({
  href,
  prefetchOnIntent = true,
  onFocus,
  onMouseEnter,
  onTouchStart,
  ...props
}: Props) {
  const router = useRouter();
  const target = hrefToString(href);

  function prefetch() {
    if (!prefetchOnIntent) return;
    router.prefetch(target);
  }

  return (
    <Link
      {...props}
      href={href}
      prefetch={false}
      onFocus={(event) => {
        prefetch();
        onFocus?.(event);
      }}
      onMouseEnter={(event) => {
        prefetch();
        onMouseEnter?.(event);
      }}
      onTouchStart={(event) => {
        prefetch();
        onTouchStart?.(event);
      }}
    />
  );
}

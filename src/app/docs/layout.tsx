import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JUSTWYNN Docs - Documentation",
  description: "Complete documentation for the JUSTWYNN gamified launchpad platform.",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

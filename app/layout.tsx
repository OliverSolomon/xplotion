import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xplotion",
  description: "Notion clone where I don't have to pay",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={mont.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="xplotion-theme-2"
          >
            <Toaster position="bottom-center"/>
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
        </body>
    </html>
  );
}

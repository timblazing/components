import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { AnchoredToastProvider, ToastProvider } from "@/components/ui/toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DesignSystemShell } from "@/components/design-system/shell";
import "./globals.css";
import "@/styles/system-tokens.css";
import "@/styles/design-system.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "components",
    template: "%s · components",
  },
  description:
    "A personal reference for the design system, component libraries, and blocks used in my projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <AnchoredToastProvider>
              <TooltipProvider>
                <DesignSystemShell>{children}</DesignSystemShell>
              </TooltipProvider>
            </AnchoredToastProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

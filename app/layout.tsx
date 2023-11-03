import type { Metadata, Viewport } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shirokodev.site/"),
  title: "Shirokodev",
  description: "Welcome to Shirokodev",
  applicationName: "Homepage",
  authors: {
    url: "https://www.facebook.com/sunaookamishirokodev",
    name: "Sunaookami Shiroko",
  },
  generator: "NextJS TailwinCSS TypeScript",
  keywords: ["Shiroko", "Shiroko Dev", "Sunaookami Shiroko", "Homepage"],
  referrer: "origin-when-cross-origin",
  verification: {
    google: "0OtymWYNjcT0a_R2_ULRMuZrJa1-ZJmd-o8QWTDV64k",
  },
  publisher: "Sunaookami Shiroko",
  creator: "Sunaookami Shiroko",
  formatDetection: {
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Shirokodev",
    description: "Welcome to Shirokodev",
    url: "https://shirokodev.site/",
    siteName: "shirokodev.site",
    locale: "vi_VN",
    countryName: "Vietnam",
    images: [
      {
        url: "/seo.webp",
        alt: "Shiroko Background SEO",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunaookami Shiroko Website",
    description: "Welcome to Shirokodev",
    site: "shirokodev.site",
    creator: "@shirokoxdev",
    images: "/seo.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload stylesheet"
          as="style"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${robotoMono.className} flex py-16`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

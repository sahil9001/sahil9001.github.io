import "./globals.css";
import Providers from "@/components/providers";

export const metadata = {
  title: "Sahil's Portfolio",
  description: "A web developer portfolio",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import "./globals.css";
import Providers from "@/components/providers";

export const metadata = {
  title: "Sahil Silare — Portfolio",
  description: "Software Developer at Adobe",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

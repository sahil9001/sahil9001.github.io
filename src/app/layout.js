import "./globals.css";

export const metadata = {
  title: "Sahil's Portfolio",
  description: "A web developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <body>{children}</body>
    </html>
  );
}

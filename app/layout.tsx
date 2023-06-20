import "./globals.css";
import { Navbar, Footer } from "@/components";

export const metadata = {
  title: "Carental",
  description: "Discover the best cars in the world",
  icons: {
    icon: {
      url: "/favicon.ico",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative max-width">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

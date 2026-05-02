import "./globals.css";
import LayoutChrome from "@/components/layout-chrome";

export const metadata = {
  metadataBase: new URL("https://www.virginiabusinesssolutions.in"),
  title: {
    default: "Virginia Business Solutions",
    template: "%s | Virginia Business Solutions",
  },
  description:
    "Clear digital career guidance in India for students and working professionals.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <LayoutChrome>{children}</LayoutChrome>
      </body>
    </html>
  );
}

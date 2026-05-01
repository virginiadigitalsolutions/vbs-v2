import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <div className="min-h-screen flex flex-col bg-[linear-gradient(180deg,_#f8fbff_0%,_#ffffff_22%,_#f5f7fa_100%)]">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import "./globals.css";
import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="layout-body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

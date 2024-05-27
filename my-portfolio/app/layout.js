import "./globals.css";
import Header from "@/app/layouts/header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="layout-body">
        <Header />
        {children}
      </body>
    </html>
  );
}

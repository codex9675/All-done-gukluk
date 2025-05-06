import Providers from "./providers";
import "./globals.css";

export const metadata = {
  title: "Product Management System",
  description: "User and product management system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

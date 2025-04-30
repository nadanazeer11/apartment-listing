import Navbar from "@/components/Navbar";
import "../theme/globals.css";
import ReactQueryProvider from "@/lib/ReactQueryProvider";
import { geistMono, geistSans } from "@/theme/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <Navbar />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}

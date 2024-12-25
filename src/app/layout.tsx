import Counter from "./components/counter";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Counter />
        {children}
      </body>
    </html>
  );
}

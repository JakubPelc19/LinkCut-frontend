import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen h-screen m-0 p-0 flex justify-center items-center">
        {children}
      </body>
    </html>
  );
}

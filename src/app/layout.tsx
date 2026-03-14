import "./globals.css";

export default function Layout({ children }:any) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
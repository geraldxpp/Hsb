import "./globals.css";

export const metadata = {
  title: "The New World (HSN)",
  description: "HSN is forever on Solana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}

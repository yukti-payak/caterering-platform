import "./globals.css";

export const metadata = {
  title: "Caterer Project",
  description: "Find the best caterers near you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
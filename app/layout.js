import "./globals.css";

export const metadata = {
  title: "JobBoost AI",
  description: "AI Resume Builder",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

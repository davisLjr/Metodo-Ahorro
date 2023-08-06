// app/layout.tsx
import { Providers } from "./providers";
import styles from "./globals.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

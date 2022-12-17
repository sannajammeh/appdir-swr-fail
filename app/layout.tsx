import { unstable_serialize } from "swr";

const getData = () => {
  return unstable_serialize(["hello", "world"]);
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = getData();
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}

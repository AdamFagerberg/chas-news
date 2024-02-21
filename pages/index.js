import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/news">News</Link>
      <Link href="/economy">Economy</Link>
    </main>
  );
}

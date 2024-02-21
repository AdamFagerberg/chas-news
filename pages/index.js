import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/keyword/news">News</Link>
      <Link href="/keyword/economy">Economy</Link>
    </main>
  );
}

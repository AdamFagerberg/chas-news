import Link from "next/link";

export default function NewsCards({ title, imgSrc, href, desc }) {
  return (
    <div>
      <img className="" src={imgSrc} />

      <h1 className="text-2xl font-bold">{title}</h1>

      <p className="pb-2">{desc}</p>
      <Link href={href}>Read More</Link>
    </div>
  );
}

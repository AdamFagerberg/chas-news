import Link from "next/link";

export default function NewsCards({ title, imgSrc, children, href, desc }) {
  return (
    <div>
      <img className="" src={imgSrc} />

      <h1 className="text-2xl font-bold px-4">{title}</h1>

      <p className="px-4 pb-2">{desc}</p>
      <Link href={href}>Read More</Link>
    </div>
  );
}

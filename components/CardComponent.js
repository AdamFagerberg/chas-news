import Link from "next/link";

export default function CardComponent({ title, imgSrc, children, href }) {
  return (
    <div className="border rounded-xl w-80 h-auto shadow-md flex flex-col gap-3">
      <img className="rounded-t-xl" src={`${imgSrc}`} />

      <h1 className="text-2xl font-bold px-4">{title}</h1>

      <p className="px-4 pb-2">{children}</p>
      <Link href={`/articles/${href}`}>Read More</Link>
    </div>
  );
}

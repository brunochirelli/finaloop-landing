import type { Author as AuthorType } from "@/shared/types";
import Author from "../Author/Author";

type ExpertsProps = {
  title: string;
  authors: AuthorType[];
};

export default function Experts({ authors, title }: ExpertsProps) {
  return (
    <section className="bg-secondary text-white py-8">
      <div className="max-w-[--main-width] mx-auto p-8 space-y-8 sm:flex gap-16">
        <h2 className="text-2xl md:text-4xl font-light grow">{title}</h2>
        {authors.map((author, i) => {
          return (
            <Author
              author={author}
              key={`${author.name}-${i}`}
              className={i === 1 ? "bg-orange-200" : "bg-slate-100"}
            />
          );
        })}
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";
import type { Author } from "@/shared/types";
import Image from "next/image";

type AuthorProps = {
  author: Author;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Author({ author, className }: AuthorProps) {
  return (
    <div className="w-full max-w-[440px]">
      <div
        className={cn(
          "relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto md:mx-0 mb-14",
          className,
        )}
      >
        <Image
          src={author.image}
          alt={author.name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="mb-4 text-xl">{author.name}</h3>
      <p className="text-sm font-light">{author.description}</p>
    </div>
  );
}

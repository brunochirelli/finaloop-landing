import Image from "next/image";

type FeatureItemProps = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureItem({
  icon,
  title,
  description,
}: FeatureItemProps) {
  return (
    <div className="space-y-8 py-8 w-full">
      <Image alt="" className="mx-auto sm:mx-0" src={icon} />
      <h3 className="text-3xl text-center sm:text-left font-light intersect:animate-fade-up">
        {title}
      </h3>
      <p className="text-sm text-center sm:text-left intersect:animate-fade-up intersect:animate-delay-100">
        {description}
      </p>
    </div>
  );
}

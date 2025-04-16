import Image from "next/image";

type Props = {
  name: string;
  image: string;
};
export default function Category({ name, image }: Props) {
  return (
    <div className="flex flex-col items-center gap-3 max-w-full">
      <div className="rounded-lg transition-shadow duration-300 overflow-hidden max-w-full md:w-96 w-80 aspect-5/6 hover:shadow-lg">
        <Image
          src={image}
          width={200}
          height={300}
          className="size-full object-cover transition-transform duration-300 hover:scale-105"
          priority
          alt={name}
        />
      </div>
      <h3 className="text-lg text-secondary-foreground font-bold">{name}</h3>
    </div>
  );
}

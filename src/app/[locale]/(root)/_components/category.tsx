import Image from "next/image";

type Props = {
  name: string;
  image: string;
};

export default function Category({ name, image }: Props) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={image}
        width={200}
        height={200}
        className="md:w-96 w-80 rounded-lg object-cover"
        priority
        alt={name}
      />
      <h3 className="text-lg text-secondary-foreground font-bold">{name}</h3>
    </div>
  );
}

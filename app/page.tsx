import Image from "next/image";

export default function Home() {
  const myImage = "/images/me.jpg"
  return (
    <main className="">
      <Image
        src={myImage}
        alt="my photo"
        height={200}
        width={200}
        className="rounded-full"
      />
    </main>
  );
}

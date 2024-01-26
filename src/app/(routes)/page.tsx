import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Form from "./_components/form";

const inter = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  const classes = {
    title: "",
  };
  return (
    <div className="p-9 px-20">
      <h1
        className={cn(inter.className, "font-bold text-6xl text-center pb-6")}
      >
        Encrypt and decrypt text
      </h1>
      <p className=" text-slate-300 text-center w-full md:w-1/2 mx-auto pb-6">
        The algorithm employed is{" "}
        <Link
          href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"
          target="_blank"
          className=" text-cyan-600"
        >
          AES (Advanced Encryption Standard)
        </Link>{" "}
        encryption ensures robust security for your data.
      </p>
      <Link target="_blank" href="https://twitter.com/jonniermartinez">
        <p className="text-center p-2 px-4 cursor-pointer hover:bg-slate-100 hover:text-slate-900 border w-fit mx-auto rounded-[0.75rem]">
          Follow me on twitter
        </p>
      </Link>
      <div className="flex w-full justify-between mt-9 px-36 gap-28">
        <Form></Form>
        <Form></Form>
      </div>
    </div>
  );
}

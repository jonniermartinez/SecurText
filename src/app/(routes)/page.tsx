import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Form from "./_components/form";

const inter = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  const classes = {
    container: "md:p-9 p-3 md:px-20 max-w-7xl mx-auto",
    title: cn(
      inter.className,
      "font-bold text-5xl md:text-6xl text-center pb-6"
    ),
    text: "text-slate-300 text-center w-full md:w-1/2 mx-auto pb-6",
    url: "text-cyan-600",
    callToAction:
      "text-center p-2 px-4 cursor-pointer hover:bg-slate-100 hover:text-slate-900 border w-fit mx-auto rounded-[0.75rem]",
    cardsContainer:
      "flex w-full flex-wrap justify-between mt-9 lg:px-36 items-center gap-6 md:gap-28",
  };
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Encrypt and decrypt text</h1>
      <p className={classes.text}>
        The algorithm employed is{" "}
        <Link
          href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"
          target="_blank"
          className={classes.url}
        >
          AES (Advanced Encryption Standard)
        </Link>{" "}
        encryption ensures robust security for your data.
      </p>
      <Link target="_blank" href="https://twitter.com/jonniermartinez">
        <p className={classes.callToAction}>Follow me on twitter</p>
      </Link>
      <div className={classes.cardsContainer}>
        <Form encrypt={true}></Form>
        <Form></Form>
      </div>
    </div>
  );
}

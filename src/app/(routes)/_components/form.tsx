"use client";
import { Playfair_Display } from "next/font/google";

import cryptoJS from "crypto-js";

import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CopyClipboard from "@/components/ui/copy-clipboard";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const inter = Playfair_Display({ subsets: ["latin"] });

interface FormProps {
  encrypt?: boolean;
}

function Form({ encrypt }: FormProps) {
  const title = encrypt ? "Encrypt Text" : "Decrypt Text";
  const textPlaceHolder = encrypt
    ? "Paste/type your plain string"
    : "Paste/type your encrypted string";

  const handleEncrypt = () => {
    const result = cryptoJS.AES.encrypt(
      "Jonnier is a programer",
      "password"
    ).toString();
    console.log(result);
  };

  const handleDecrypt = () => {
    const result = cryptoJS.AES.decrypt(
      "U2FsdGVkX1+trge5UTYdm6f0t2wIo9sWw71HB9s6/JLZox636fd0krGYUYq4gPrw",
      "password"
    );
    const decryptValue = result.toString(cryptoJS.enc.Utf8);
    console.log(decryptValue);
  };

  return (
    <div className="w-full lg:w-5/12 flex flex-col gap-5 ">
      <Card>
        <CardHeader>
          <CardTitle className={`${cn(inter.className)} font-semibold text-xl`}>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div>
            <Label>Text</Label>
            <Input placeholder={textPlaceHolder}></Input>
          </div>
          <div>
            <Label>Password</Label>
            <Input placeholder="Password"></Input>
          </div>
        </CardContent>
        <CardFooter>
          <Dialog>
            {" "}
            <Button
              onClick={() => {
                encrypt ? handleEncrypt() : handleDecrypt();
              }}
            >
              {encrypt ? "Encrypt" : "Decrypt"}
            </Button>
            <DialogTrigger></DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  <CopyClipboard text={"copiame esta"}></CopyClipboard>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Form;

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
import { useState } from "react";

const inter = Playfair_Display({ subsets: ["latin"] });

interface FormProps {
  encrypt?: boolean;
}

function Form({ encrypt }: FormProps) {
  const [resultText, setResultText] = useState(String);
  const [password, setPassWord] = useState(String);
  const [text, setText] = useState(String);

  const title = encrypt ? "Encrypt Text" : "Decrypt Text";
  const textPlaceHolder = encrypt
    ? "Paste/type your plain string"
    : "Paste/type your encrypted string";

  const handleEncrypt = () => {
    const result = cryptoJS.AES.encrypt(text, password).toString();
    setResultText(result);
  };

  const handleDecrypt = () => {
    const result = cryptoJS.AES.decrypt(text, password);
    const decryptValue = result.toString(cryptoJS.enc.Utf8);
    console.log(decryptValue);
    if (decryptValue == "") {
      setResultText("Password or text to decrypt is not correct");
      return;
    }
    setResultText(decryptValue);
  };
  const handleOpenChage = (e: boolean) => {
    if (e === false) {
      setPassWord("");
      setText("");
    }
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
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={textPlaceHolder}
            ></Input>
          </div>
          <div>
            <Label>Password</Label>
            <Input
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
              placeholder="Password"
            ></Input>
          </div>
        </CardContent>
        <CardFooter>
          <Dialog onOpenChange={(e: boolean) => handleOpenChage(e)}>
            <DialogTrigger>
              {" "}
              <Button
                onClick={() => {
                  encrypt ? handleEncrypt() : handleDecrypt();
                }}
              >
                {encrypt ? "Encrypt" : "Decrypt"}
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                {!text || !password ? (
                  <>
                    <DialogTitle>Error</DialogTitle>
                    <DialogDescription>
                      The text or password field is empty
                    </DialogDescription>
                  </>
                ) : (
                  <>
                    <DialogTitle className="flex gap-3 items-center">
                      <CopyClipboard text={resultText}></CopyClipboard>
                      {encrypt ? "Encrypted Output:" : "Decrypted Text:"}
                    </DialogTitle>
                    <DialogDescription>{resultText}</DialogDescription>
                  </>
                )}
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Form;

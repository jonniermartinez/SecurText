"use client";
import { Playfair_Display } from "next/font/google";

import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const inter = Playfair_Display({ subsets: ["latin"] });

function Form() {
  return (
    <div className="w-1/2 flex flex-col gap-5 ">
      <Card>
        <CardHeader>
          <CardTitle className={`${cn(inter.className)} font-semibold text-xl`}>
            Encrypt Data
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Label>Data</Label>
            <Input placeholder="Data"></Input>
          </div>
          <div>
            <Label>Password</Label>
            <Input placeholder="Password"></Input>
          </div>
        </CardContent>
        <CardFooter>
          <Button>crear</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Form;

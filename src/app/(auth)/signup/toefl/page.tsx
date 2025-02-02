"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EyeIcon, EyeOffIcon, MoveLeft } from "lucide-react";
import google from "@public/assets/logo/google.svg";
import facebook from "@public/assets/logo/facebook.svg";
import char from "@public/assets/character/toeflM1.svg";
import bubble from "@public/assets/frag/bubble.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ToeflLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const router = useRouter();
  return (
    <section className="flex min-h-screen w-full">
      <div className="bg-[#00D7FF] w-1/3 relative">
        <Image
          src={bubble}
          alt="char"
          className="fixed w-52 lg:w-64 top-14 left-10"
        />
        <Image
          src={char}
          alt="char"
          className="fixed w-52 lg:w-64  bottom-0 left-0"
        />
      </div>
      <div className="w-2/3 py-8 px-12 flex justify-center">
        <div className="flex flex-col gap-12 w-full max-w-3xl">
          <div className="w-full space-y-2">
            <MoveLeft
              className="text-black h-8 w-8 cursor-pointer"
              onClick={() => router.back()}
            />
            <h1 className="text-center font-bold text-3xl">
              All set! Sign up to increase your TOEFL IBT score
            </h1>
          </div>
          <div className="w-full justify-center items-center">
            <div className="space-y-4 px-12">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 h-12 rounded-full border border-black"
              >
                <Image
                  src={facebook}
                  alt="facebook Logo"
                  width={20}
                  height={20}
                  className=" h-4 w-4"
                />
                Continue with Facebook
              </Button>

              <Button
                variant="outline"
                className="w-full relative flex items-center justify-center gap-2 h-12 rounded-full border border-black"
              >
                <Image
                  src={google}
                  alt="Google Logo"
                  width={20}
                  height={20}
                  className=" h-4 w-4"
                />
                Continue with Google
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-2 border-black rounded-full" />
                </div>
                <div className="relative flex justify-center text-md">
                  <span className="bg-background px-4">or</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="h-12 border-black mt-2 rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="h-12 border-black mt-2 rounded-xl"
                  />
                </div>

                <div className="relative">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Your Password"
                    className="h-12 border-black mt-2 rounded-xl"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    className="absolute right-0 top-[24px] h-12 border-black mt-2 rounded-xl w-12 px-0 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                <div>
                  <Label>Whats your gender? (optional)</Label>
                  <RadioGroup className="flex gap-4 mt-2 ml-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="man" id="man" />
                      <Label htmlFor="man">Man</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="woman" id="woman" />
                      <Label htmlFor="woman">Woman</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>Whats your birth date?</Label>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent>
                        {months.map((month) => (
                          <SelectItem key={month} value={month.toString()}>
                            {month}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Date" />
                      </SelectTrigger>
                      <SelectContent>
                        {days.map((day) => (
                          <SelectItem key={day} value={day.toString()}>
                            {day}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>

                <p className="text-sm text-center px-2">
                  By clicking Continue or Sign up, you agree to{" "}
                  <Link href="#" className="underline font-bold">
                    NGILINGO
                  </Link>{" "}
                  Terms of Use, including{" "}
                  <Link href="#" className="underline font-bold">
                    Subscription Terms
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="underline font-bold">
                    Privacy Policy
                  </Link>
                  .
                </p>

                <Button className="w-full h-12 bg-cyan-400 hover:bg-cyan-500 rounded-full border border-black text-black">
                  Sign Up
                </Button>

                <p className="text-center text-sm">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-black font-bold underline"
                  >
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToeflLogin;

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import google from "@public/assets/logo/google.svg";
import facebook from "@public/assets/logo/facebook.svg";
import apple from "@public/assets/logo/apple.svg";
import Image from "next/image";
import { EyeIcon, EyeOffIcon, MoveLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <section className="min-h-screen bg-gradient-to-b from-magenta to-vivid flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl p-8 space-y-6 my-12 pb-14">
        <div className="text-center space-y-2 relative">
          <MoveLeft
            className="absolute left-12 cursor-pointer"
            onClick={() => router.back()}
          />
          <h1 className="text-2xl font-semibold">Log in</h1>
          <p className="text-sm text-gray-600">
            Dont have any account?{" "}
            <Link
              href="/#hero"
              className="text-black font-bold hover:underline"
            >
              Get Started
            </Link>
          </p>
        </div>

        <div className="space-y-4 px-12">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 h-12 rounded-full border-black border"
          >
            <Image
              src={google}
              alt="google Logo"
              width={20}
              height={20}
              className=" h-4 w-4"
            />
            Continue with Google
          </Button>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 h-12 rounded-full border-black border"
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
            className="w-full flex items-center justify-center gap-2 h-12 rounded-full border-black border"
          >
            <Image
              src={apple}
              alt="apple Logo"
              width={20}
              height={20}
              className=" h-4 w-4"
            />
            Continue with Apple
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-black rounded-full" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2">or</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email address or username</Label>
              <Input
                id="email"
                type="text"
                className="h-12 rounded-xl border-black mt-1"
              />
            </div>

            <div className="relative">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                className="h-12 rounded-xl border-black mt-1"
              />
              <Button
                type="button"
                variant="ghost"
                className="absolute right-0 hover:bg-transparent top-7 h-12 w-12 px-0"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>

            <Button className="w-full h-12 rounded-full font-semibold bg-cyan-400 hover:bg-cyan-500 text-black">
              Masuk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

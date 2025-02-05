"use client";

import * as React from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import char from "@public/assets/character/user/toeflM.svg";
import Image from "next/image";

export default function ProfileForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name1">Name</Label>
              <Input id="name1" placeholder="Your Name" className="mt-1.5" />
            </div>

            <div>
              <Label htmlFor="name2">Name</Label>
              <Input id="name2" placeholder="Your Name" className="mt-1.5" />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your Password"
                  className="mt-1.5"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-[calc(50%-12px)]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-4 w-4" />
                  ) : (
                    <EyeIcon className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Your Gender</Label>
              <RadioGroup defaultValue="woman" className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="woman" id="woman" />
                  <Label htmlFor="woman">Woman</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="man" id="man" />
                  <Label htmlFor="man">Man</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>Birth Dates</Label>
              <div className="grid grid-cols-3 gap-4 mt-1.5">
                <div>
                  <Label className="text-sm text-muted-foreground">Month</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => (
                        <SelectItem key={i + 1} value={String(i + 1)}>
                          {new Date(0, i).toLocaleString("default", {
                            month: "long",
                          })}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">Date</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Date" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 31 }, (_, i) => (
                        <SelectItem key={i + 1} value={String(i + 1)}>
                          {i + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">Year</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 100 }, (_, i) => {
                        const year = new Date().getFullYear() - i;
                        return (
                          <SelectItem key={year} value={String(year)}>
                            {year}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="bg-[#00d7ff] rounded-3xl h-full w-full p-8">
            <Image
              src={char}
              alt="Character illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

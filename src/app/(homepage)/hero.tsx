import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { MdOutlineLogin } from "react-icons/md";
import logo from "@public/assets/logo/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen grid bg-gradient-to-b from-gem to-magenta">
      <header className="mx-auto w-full px-8 py-4 bg-gradient-to-b from-[#160039] to-[#3D009F]/0">
        <nav className="flex items-center justify-center border-b h-max py-4 w-full">
          <Image
            src={logo}
            alt="Logo"
            className="h-24 w-24 absolute top-6 left-6"
          />
          <span className="w-[150px] h-[47px] mr-auto" />
          <div className="hidden md:flex items-center gap-24">
            <Link href="#" className="text-white hover:text-white/80">
              Characters
            </Link>
            <Link href="#" className="text-white hover:text-white/80">
              AI-Speaking
            </Link>
            <Link href="#" className="text-white hover:text-white/80">
              About US
            </Link>
          </div>
          <Button
            variant="outline"
            className="text-white duration-500 border-white border-2 bg-transparent rounded-lg ml-auto px-5"
          >
            <MdOutlineLogin className="mr-2 font-bold" />
            Log in
          </Button>
        </nav>
      </header>

      <main className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
          Master English with AI-Powered Learning
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto">
          Prepare for TOEFL & IELTS with personalized lessons, interactive
          games, and real-time AI feedback. Join 50,000+ successful learners
          today.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Select>
            <SelectTrigger className="w-full md:w-[450px] bg-white text-gray-900">
              <span className="text-neutral-400 font-medium">
                Choose English Class
              </span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="toefl" className="font-bold">
                TOEFL IBT
              </SelectItem>
              <SelectItem value="ielts" className="font-bold">
                IELTS
              </SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full md:w-auto font-semibold bg-white/80 text-gray-900 border border-black">
            Get Started
            <span className="ml-4 font-extrabold">→</span>
          </Button>
        </div>
      </main>
    </div>
  );
}

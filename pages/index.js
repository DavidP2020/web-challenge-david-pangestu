import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="fixed w-full">
        <div className="bg-slate-50 mx-auto flex flex-row justify-between items-center">
          <div className="py-2 px-10 md:px-40   w-8/12">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={70}
              height={70}
              priority
            />
          </div>
          <div>
            <Link href="/login">
              <button className="py-2 px-6 text-sm leading-[160%] border border-cyan-900 rounded-full">
                Login
              </button>
            </Link>
          </div>
          <Image
            src="/assets/header-splash.png"
            alt="header-splash"
            width={100}
            height={100}
            priority
          />
        </div>
      </header>
    </>
  );
}

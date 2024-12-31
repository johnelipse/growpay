import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Calculator, PiggyBank, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import AutoPlayVideo from "./video";
import { SupportCard } from "./supportcard";

export function Home() {
  const newYear = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100">
        {/* Animated gradient background */}
        <Image
          width={1024}
          height={1024}
          src="/bg.webp"
          alt="save"
          className="absolute inset-0 object-cover z-0 w-full overflow-hidden"
        />
        <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-60" />

        <div className="container z-40  px-4 md:px-6">
          <div className="flex flex-col z-40 items-center space-y-4 text-center">
            <div className="space-y-2 z-40">
              <h1 className="text-2xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Manage Your Sacco Group with Confidence
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-100 text-[1rem] md:text-xl">
                Streamline your savings group management, track contributions,
                and grow together with our intuitive platform.
              </p>
            </div>
            <div className="space-x-4 z-40">
              <Link href="/login">
                <Button className="bg-primary">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/signup">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section className="w-full overflow-hidden relative py-12 md:py-24 lg:py-32 bg-white">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
          )}
        />
        {/* <Image
          width={1024}
          height={1024}
          src="/bg1.webp"
          alt="save"
          className="absolute inset-0 object-cover z-0 w-full overflow-hidden"
        /> */}
        <div className="container  px-4 md:px-6">
          <div className="grid gap-10 z-40 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col  items-center space-y-4 text-center">
              <div className="bg-primary/10 p-4 z-40  rounded-full">
                <PiggyBank className="h-8 w-8 z-40 text-primary" />
              </div>
              <h3 className="text-xl font-bold z-40">Easy Savings Tracking</h3>
              <p className="text-gray-500 z-40">
                Monitor contributions and track group savings progress in
                real-time.
              </p>
            </div>
            <div className="flex flex-col  items-center space-y-4 text-center">
              <div className="bg-primary/10 p-4 z-40 rounded-full">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold z-40">Member Management</h3>
              <p className="text-gray-500 z-40">
                Efficiently manage member profiles, roles, and permissions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="bg-primary/10 p-4 z-40 rounded-full">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold z-40">Smart Calculations</h3>
              <p className="text-gray-500 z-40">
                Automated dividend calculations and distribution planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full overflow-hidden relative px-4 md:px-8 py-12 md:py-12 lg:py-12 bg-gray-50">
        {/* <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        /> */}
        <Image
          width={1024}
          height={1024}
          src="/bg3.jfif"
          alt="save"
          className="absolute inset-0 object-cover -z-10 w-full overflow-hidden"
        />
        <div className="z-40 mb-8">
          <div className="space-y-2 text-center z-40">
            <h2 className="text-xl font-bold  z-40 tracking-tighter sm:text-4xl">
              Need Support?
            </h2>
            <p className=" text-gray-500  z-40 text-[1rem] md:text-xl">
              Our team is here to help you get the most out of your Sacco group
              management.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <SupportCard />
          <AutoPlayVideo className="z-30 rounded-2xl" src="/save.mp4" />
        </div>
      </section>

      <div className="text-center py-4">
        <p className="text-xs text-gray-500">
          &copy; {newYear}. Company Name. All rights reserved.
        </p>
      </div>
    </div>
  );
}

"use client";

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SignedIn, SignOutButton } from "@clerk/nextjs";

function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {/* dynamic block of code */}
        {/* Insted of writing all link manually we have created the array of list from we are fetching   */}
        {/* to access all those link we have mapped the array */}
        {sidebarLinks.map((link) => {
          // how do we know which link is active for that we are going to wrrap map irregular instance return to with an actual function with return statement
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route; // link.route.length > 1 meaning it's just not home
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && "bg-primary-500"}`}>
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 px-6">
        <SignedIn>
          {/* <div>This content is accessible only to signed in users.</div> */}
          {/* after login only we want to showcase is the signedout button   */}
          <SignOutButton signOutCallback = {() => router.push("/sign-in")}>
            <div className="flex cursor-pointer gap-4 p-4">
              <Image
                src="/assets/logout.svg"
                alt="logout"
                width={24}
                height={24}
              />
              <p className="text-light-2 max-lg:hidden">logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
}

export default LeftSidebar;

"use client";

import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { SignedIn, SignOutButton } from "@clerk/nextjs";

function Bottombar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
      {sidebarLinks.map((link) => {
          // how do we know which link is active for that we are going to wrrap map irregular instance return to with an actual function with return statement
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route; // link.route.length > 1 meaning it's just not home
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`bottombar_link ${isActive && "bg-primary-500"}`}>
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p
                className="text-subtle-medium text-light-1 max-sm:hidden"
              >
                {/* we dont have space for two word we want show only one word */}
                {/* for that modify the link.lable */}

                {link.label.split(/\s+/)[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Bottombar;

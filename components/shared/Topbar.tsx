import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { dark } from '@clerk/themes'

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">ThreadHub</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          {/*on md means medeium device it's gone be hidden*/}
          {/* The <SignedIn /> component offers authentication checks as a cross-cutting concern. Any children components wrapped by a <SignedIn /> component will be rendered only if there's a User with an active Session signed in your application. */}
          <SignedIn>
            {/* <div>This content is accessible only to signed in users.</div> */}
            {/* after login only we want to showcase is the signedout button   */}
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        /> 
      </div>
    </nav>
  );
}

export default Topbar;

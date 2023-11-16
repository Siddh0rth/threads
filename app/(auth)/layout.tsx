// this layout will apply to route within the auth sub-group
// or this layout will apply to only auth folder 


import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "../globals.css";

export const metadata = {
  title: "ThreadHub",
  description: "A Next.js 13 Meta Thread Application",
};

//we can have multiple subset thats why we need to store it in array
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  //we need to define the property of childern because we are using typerscript else it will through an error
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* inter.className apply the font to all acrose the file or whatever inside the below body tage */}
        <body className={`${inter.className} bg-dark-1`}>
          {/* here we are rendering the children */}
          <div className="w-full flex justify-center items-center min-h-screen">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

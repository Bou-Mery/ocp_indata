import Navbar from "@components/Navbar";
import "@styles/globals.css";

import { getServerSession } from "next-auth";
import SessionProvider from "@utils/SessionProvider";
import { Providers } from "@utils/providers";


export const metadata = {
  title: "Indata App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <Providers>
        <SessionProvider session={session}>
          <div className='main'>
            <div className='gradient'></div>
          </div>
          <main className='app'>
            <Navbar />

            {children}
          </main>
        </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}












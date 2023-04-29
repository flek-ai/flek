import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from 'next/image';
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Flek Next Demo</title>
        <meta name="description" content="Flek Next Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=DM Sans" rel="stylesheet" />
      </Head>
      <main>
        <div className="h-[100vh] bg-primary p-xxl">
          <div className="rounded-md bg-white h-full flex">
            <div className="bg-surface p-xxl rounded-md w-1/2 gap-xxl flex flex-col">
              <Image width='36' height='36' src='/square.svg' alt="square" className='text-primary' />
              <p className="text-grey-900 text-heading-xl">Enterprise grade <br></br> Design System for <br></br> the world</p>
              <p className="text-grey-600 text-body-md">Flek.ai keeps your Design Tokens synced across Figma <br></br> & all your platforms (iOS, Android & Web)</p>
              <div className="bg-grey.500 rounded-md border-24 pl-xxl shadow-md pb-xxl border border-black">
                <Image width='65' height='65' src={'/quote.svg'} alt="quote" className='text-primary'/>
                <p className="text-primary text-heading-xl pt-xxl">Let’s flek it!</p>
                <p className="text-primary text-body-md">Design system in 90% companies <br></br> are broken, let’s flek it!</p>
              </div>
            </div>
            <div className="bg-white rounded-md w-1/2 flex flex-col justify-center gap-xs items-center">
              <p className="text-grey.900 text-heading-xl">Get started</p>
              <p className="text-grey.600 text-body-md">Create your account now!</p>
              <div className='w-3/4 flex flex-col gap-xxl p-l'>
                <div className='flex flex-col gap-s'>
                  <p className="text-grey.600 text-body-md">Full Name</p>
                  <input className='rounded-md border border-grey.500 p-2 w-full text-grey-900 text-body-md' value='Destiny Gems'></input>
                </div>
                <div className='flex flex-col gap-s'>
                  <p className="text-grey.600 text-body-md">Email</p>
                  <input className='rounded-md border border-grey.500 p-2 w-full text-grey-900 text-body-md' value='connect@flek.ai'></input>
                </div>
                <div className='flex flex-col gap-s'>
                  <div className='flex justify-between'>
                    <p className="text-grey.600 text-body-md">Password</p>
                    <p className="text-sucess text-body-md">Success!</p>
                  </div>
                  <input className='rounded-md border border-grey-500 p-2 w-full text-grey-900 text-body-md' value='**********'></input>
                </div>
                <button className='rounded-md bg-primary p-m text-center text-white'>Sign Up</button>
                <div className='flex gap-xs justify-center'>
                  <p className="text-grey-600 text-body-md">Have an account?</p>
                  <Link href='/#' className="text-sucess text-body-md">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

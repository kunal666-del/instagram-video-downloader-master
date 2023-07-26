import InstagramForm from "@/components/instagram/InstagramForm";
import Head from "next/head";
import Image from 'next/image';

export default function HomePage() {
  <Head>
    <meta name="google-site-verification" content="ti1R8NiKO8Dbr-LivqYRTYPirAEmcZj7A_BHzyeSzSQ" />
  </Head>
  return (
    <main className="container mx-auto my-8 w-full flex-1 rounded p-4 md:max-w-3xl">
      <section className="mb-8">
        <h1 className="mb-2 text-center text-3xl font-bold sm:text-4xl">
          Instagram Video Downloader
        </h1>
        <p className="mx-auto mb-4 text-center text-sm sm:text-base">
          Instagram Saver tool , designed to effortlessly download high-quality
          Instagram content for free. No registration or account required. You
          can save videos and reels by copying and pasting the Instagram URL.
        </p>
      </section>
      <section>
        <InstagramForm />
        <p className="my-4 text-center text-sm text-gray-500 motion-safe:animate-[animate-late-fade-in_2s_ease-in-out_1] dark:text-gray-400">
          If the download opens a new page, just right click the video and then
          click `Save as video`
        </p>
      </section>
      <section>
      <h3 className="fontbold text-xl text-center">Features</h3>
      <div className= 'flex justify-center'>
      <h4>1. Instagram Video Downloader</h4>
      <div className="flex">
 
        <Image
      src="../public/images/OIP.jpg"
      width={100}
      height={100}
      alt="Picture of the author"
    />
        <p>Save It is an instagram video downloader, using which you can download any type of Instagram video from public accounts, you just have to copy the link and paste in the form above and click download button, your video will start to download in few seconds, Save it instagram downloader is totally free and doesn't require any username or password to work, so it is also totally risk free.</p>
      </div>
      </div>
      </section>
      <section>
        <h2 className="text-4xl my-10 font-extrabold text-center ">Thanks! for using Instagram downloader, Do share with Your friends ✨✨</h2>
      </section>
    </main>
  );
}

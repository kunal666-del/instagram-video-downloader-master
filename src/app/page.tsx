import InstagramForm from "@/components/instagram/InstagramForm";
import Head from "next/head";

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
        <h2 className="text-4xl font-extrabold underline underline-offset-4 text-center my-7 ">How It Works</h2>
        <ul className=" text-2xl text-center">
          <li>1. Open Instagram</li>
          <li>2. Click on share button</li>
          <li>3. Click On Copy Link</li>
          <li>4. Paste Your Copied Link Above</li>
          <li>5. Click Download</li>
          <li>Your Download will start in few seconds</li>
        </ul>
      </section>
      <section>
        <h2 className="text-4xl my-10 font-extrabold text-center ">Thanks! for using Instagram downloader, Do share with Your friends ✨✨</h2>
      </section>
    </main>
  );
}

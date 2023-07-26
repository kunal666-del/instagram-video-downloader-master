import InstagramForm from "@/components/instagram/InstagramForm";
import Head from "next/head";
import Image from "next/Image"

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
      <div className="flex flex-col">
        <Image src= "https://www.bing.com/images/search?view=detailV2&ccid=%2b3IzJ%2bVN&id=AEE487B1C75549750D0EB896ECEDA3BC9F281FC6&thid=OIP.-3IzJ-VNiRpYxxTQOEg43QHaEs&mediaurl=https%3a%2f%2fwww.businessinsider.in%2fphoto%2f78288158%2finstagram-reels-new-update-allows-longer-videos-doubles-the-length-of-the-clips-you-can-upload.jpg%3fimgsize%3d244031&exph=1024&expw=1616&q=instagram+video&simid=607995308976309756&FORM=IRPRST&ck=3E889450B87A2A8728670FC27ABE26EE&selectedIndex=0" ></Image>
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

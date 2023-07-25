import { load } from "cheerio";

import { FetchPostArgs, VideoInfo } from "@/types";
import { PostJson } from "@/types/instagramScraper";

import { axiosFetch, getHeaders, getTimedFilename } from "@/lib/utils";
import { BadRequest } from "@/exceptions";
import { enableScraper } from "@/configs/instagram";

const formatPageJson = (json: any) => {
  let scrapedPost: PostJson;

  if (Array.isArray(json)) {
    scrapedPost = json.find((item: any) => item.video);
  } else {
    scrapedPost = json;
  }

  if (!scrapedPost) {
    return null;
  }

  const videoList = scrapedPost.video;

  if (!videoList) {
    throw new BadRequest("This post does not contain a video");
  }

  if (videoList.length === 0) {
    throw new BadRequest("This post does not contain a video");
  }

  const video = videoList[0];

  const filename = getTimedFilename("instagram-saver", "mp4");

  const videoJson: VideoInfo = {
    filename: filename,
    width: video.width,
    height: video.height,
    videoUrl: video.contentUrl,
  };

  return videoJson;
};

export const fetchFromPage = async ({ postUrl, timeout }: FetchPostArgs) => {
  const headers = getHeaders();

  if (!enableScraper) {
    console.log("Instagram Scraper is disabled in @config/instagram");
    return null;
  }

  const response = await axiosFetch({
    url: postUrl,
    headers,
    timeout,
  });

  if (!response) {
    return null;
  }

  if (response.statusText !== "OK") {
    return null;
  }

  const $ = load(response.data);
  const jsonElement = $("script[type='application/ld+json']");

  if (jsonElement.length === 0) {
    console.log("LD+JSON not available for this post");
    return null;
  }

  const jsonText: string = jsonElement.text();
  const json: any = JSON.parse(jsonText);
  const formattedJson = formatPageJson(json);
  return formattedJson;
};

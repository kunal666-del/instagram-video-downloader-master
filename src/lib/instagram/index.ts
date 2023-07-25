import { FetchPostArgs } from "@/types";

import { axiosFetch, getHeaders } from "@/lib/utils";
import { BadRequest } from "@/exceptions";

import { fetchFromAPI } from "./instagramAPI";
import { fetchFromPage } from "./instagramScraper";

export const getPostId = (postUrl: string | null) => {
  const postRegex =
    /^https:\/\/(?:www\.)?instagram\.com\/p\/([a-zA-Z0-9_-]+)\/?/;
  const reelRegex =
    /^https:\/\/(?:www\.)?instagram\.com\/reels?\/([a-zA-Z0-9_-]+)\/?/;
  let postId;

  if (!postUrl) {
    throw new BadRequest("Instagram URL was not provided");
  }

  const postCheck = postUrl.match(postRegex);
  if (postCheck) {
    postId = postCheck.at(-1);
  }

  const reelCheck = postUrl.match(reelRegex);
  if (reelCheck) {
    postId = reelCheck.at(-1);
  }

  if (!postId) {
    throw new BadRequest("Instagram post/reel ID was not found");
  }

  return postId;
};

export const pageExist = async ({ postUrl, timeout }: FetchPostArgs) => {
  const headers = getHeaders();

  const apiUrl = postUrl;
  try {
    await axiosFetch({
      url: apiUrl,
      method: "HEAD",
      throwError: true,
      headers,
      timeout,
    });
  } catch (error: any) {
    if (error.message.includes("404")) {
      return false;
    }
  }

  return true;
};

export const fetchPostJson = async (postID: string, timeout?: number) => {
  const postUrl = "https://www.instagram.com/p/" + postID;

  const isPageExist = await pageExist({ postUrl, timeout });
  if (!isPageExist) {
    throw new BadRequest("This post page isn't available.", 404);
  }

  const pageJson = await fetchFromPage({ postUrl, timeout });
  if (pageJson) return pageJson;

  const apiJson = await fetchFromAPI({ postUrl, timeout });
  if (apiJson) return apiJson;

  throw new BadRequest(
    "The video download link for this post is not available.",
    401
  );
};

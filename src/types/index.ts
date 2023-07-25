export type SuccessResponse<T> = {
  status: "success";
  data: T;
};

export type ErrorResponse = {
  status: "error";
  message: string;
};

export type APIResponse<T> = SuccessResponse<T> | ErrorResponse;

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImageUrl: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type VideoInfo = {
  filename: string;
  width: string;
  height: string;
  videoUrl: string;
};

export type FetchPostArgs = {
  postUrl: string;
  timeout?: number;
};

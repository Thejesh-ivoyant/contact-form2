export interface EtagOptions {
    maxAge?: number;
    cacheControl?: string;
    weak?: boolean;
  }
  export const mergeDefaultOptions = (
    options: EtagOptions = {}
  ): Required<EtagOptions> => {
    const {
      maxAge = 0,
      cacheControl = `private, max-age=${maxAge}, must-revalidate`, //telling it to use cache
      weak = true,
    } = options;
    return {
      cacheControl,
      maxAge,
      weak,
    };
  };
  //cacheControl = `private, no-cache, max-age=${maxAge}, must-revalidate`,
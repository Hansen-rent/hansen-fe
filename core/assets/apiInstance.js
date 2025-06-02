import queryString from "query-string";

export const useApiInstance = async (url, options) => {
  const runtimeConfig = useRuntimeConfig();
  let newUrl = url;

  if (options?.params) {
    const stringifyParams = queryString.stringify(options.params, {
      arrayFormat: "bracket",
    });
    newUrl = `${url}?${stringifyParams}`;
  }

  const newOptions = {
    ...options,
    baseURL: runtimeConfig.public.apiBaseUrl,
    params: undefined,
    credentials: "omit",
    retry: 0,
  };

  return await $fetch(newUrl, newOptions);
};

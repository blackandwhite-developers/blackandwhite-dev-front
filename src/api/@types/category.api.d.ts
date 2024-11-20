type getsCategoryRequestParams = unknown;
type getsCategoryRequestPath = unknown;
type getsCategoryRequestBody = unknown;

type getsCategoryRequest = {
  path?: getsCategoryRequestPath;
  body?: getsCategoryRequestBody;
  params?: getsCategoryRequestParams;
};

type getsCategoryResponse = {
  results: ICategory[];
};

type getCategoryRequestPath = {
  cid: string;
};

type getCategoryRequestBody = unknown;

type getCategoryRequestParams = unknown;

type getCategoryRequest = {
  path: getCategoryRequestPath;
  body?: getCategoryRequestBody;
  params?: getCategoryRequestParams;
};

type getCategoryResponse = {
  category: ICategory;
};

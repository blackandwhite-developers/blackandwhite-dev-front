//롯지 카테고리
type getLodgesByCategoriesRequestPath = {
  categoryId: string;
};

type getLodgesByCategoriesRequestBody = {};

type getLodgesByCategoriesRequestParams = {};

type getLodgesByCategoriesRequest = {
  path: getLodgesByCategoriesRequestPath;
  body?: getLodgesByCategoriesRequestBody;
  params?: getLodgesByCategoriesRequestParams;
};
type getLodgesByCategoriesResponse = {
  data: Array<ILodge>;
};

//롯지 아이디
type getLodgeByIdRequestPath = {
  lodgeId: string;
};
type getLodgesByIdRequestBody = {};
type getLodgesByIdRequestParams = {};

type getLodgesByIdRequest = {
  path: getLodgesByIdRequestPath;
  body?: getLodgesByIdRequestBody;
  params?: getLodgesByIdRequestParams;
};

type getLodgesByIdResponse = {
  data: ILodge;
};

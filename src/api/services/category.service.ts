import { pathToUrl } from "@/utils/url";
import { AxiosInstance } from "axios";

const CATEGORY_ROUTES = {
  /** 카테고리 생성 */
  CREATE_CATEGORY: `/api/category`,
  /** 서브 카테고리 생성 */
  CREATE_SUB_CATEGORY: `/api/category/:cid`,
  /** 카테고리 상세조회 */
  GETS_CATEGORY: `/api/category`,
  /** 카테고리 상세조회 */
  GET_CATEGORY: `/api/category/:cid`,
  /** 카테고리 수정 */
  UPDATE_CATEGORY: `/api/category/:cid`,
  /** 카테고리 삭제 */
  DELETE_CATEGORY: `/api/category/:cid`,
} as const;

export class CategoryService {
  _ajax: AxiosInstance;

  constructor(_ajax: AxiosInstance) {
    this._ajax = _ajax;
  }

  async getAllCategories(): Promise<getsCategoryResponse> {
    try {
      const res = await this._ajax.get(pathToUrl(CATEGORY_ROUTES.GETS_CATEGORY, {}), {
        params: {
          level: 0,
          parent: null,
        },
      });
      console.log(res.data.results);
      return res.data;
    } catch (error) {
      console.error(error);
      return { results: [] };
    }
  }

  async getCategory(req: getCategoryRequest): Promise<getCategoryResponse> {
    const { path } = req;
    const { data } = await this._ajax.get(pathToUrl(CATEGORY_ROUTES.GET_CATEGORY, path ?? {}));
    return data;
  }
}

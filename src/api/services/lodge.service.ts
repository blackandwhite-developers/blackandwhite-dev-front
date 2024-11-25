import { pathToUrl } from "@/utils/url";
import { AxiosInstance } from "axios";

const LODGE_ROUTES = {
  /** 카테고리별 숙소 조회 */
  GET_LODGES: `/api/lodges`,
  /** 숙소 상세 조회 */
  GET_LODGE: `/api/lodges/:id`,
} as const;

export class LodgeService {
  _ajax: AxiosInstance;

  constructor(_ajax: AxiosInstance) {
    this._ajax = _ajax;
  }

  async getLodgesByCategories(req: getLodgesByCategoriesRequest): Promise<getLodgesByCategoriesResponse> {
    const { path } = req;
    const res = await this._ajax.get(pathToUrl(LODGE_ROUTES.GET_LODGES, path));
    return res.data;
  }

  async getLodgeById(req: getLodgesByIdRequest): Promise<getLodgesByIdResponse> {
    const { path } = req;

    const res = await this._ajax.get(pathToUrl(LODGE_ROUTES.GET_LODGE, { id: path.lodgeId }));
    console.log(res.data);
    return {
      data: res.data,
    };
  }
}

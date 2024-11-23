import { pathToUrl } from "@/utils/url";
import { AxiosInstance } from "axios";

const RESERVATION_ROUTES = {
    /** 예약 조회 (사용자) */
    GET_RESERVATION: `/api/reservation/me`,
    /** 예약 상세 조회 (사용자) */
    GET_RESERVATION_DETAIL: `/api/reservation/:id`,
    /** 예약 생성 (사용자) */
    CREATE_RESERVATION: `/api/reservation`,
    /** 예약 수정 (사용자) */
    UPDATE_RESERVATION: `/api/reservation/:id`,
    /** 예약 삭제 (사용자) */
    DELETE_RESERVATION: `/api/reservation/:id`,
    /** 예약 취소 (사용자) */
    CANCEL_RESERVATION: `/api/reservation/cancel/:id`,
} as const;

export class reservationService {
    _ajax: AxiosInstance;

    constructor(_ajax: AxiosInstance) {
        this._ajax = _ajax;
    }

    // 예약 조회
    async getReservation(
        req: getReservationDetailRequest
    ): Promise<getReservationDetailResponse> {
        const { path } = req;
        const { data } = await this._ajax.get(
            pathToUrl(RESERVATION_ROUTES.GET_RESERVATION, path)
        );
        return data;
    }

    // 예약 상세 조회
    async getReservationDetail(
        req: getReservationDetailRequest
    ): Promise<getReservationDetailResponse> {
        const { path } = req;
        const { data } = await this._ajax.get(
            pathToUrl(RESERVATION_ROUTES.GET_RESERVATION_DETAIL, path)
        );
        return data;
    }

    // 예약 생성
    async createReservation(
        req: createReservationRequest
    ): Promise<createReservationResponse> {
        const { body } = req;
        const { data } = await this._ajax.post(
            RESERVATION_ROUTES.CREATE_RESERVATION,
            body
        );
        return data;
    }

    // 예약 수정
    async updateReservation(
        req: updateReservationRequest
    ): Promise<updateReservationResponse> {
        const { path, body } = req;
        const { data } = await this._ajax.put(
            pathToUrl(RESERVATION_ROUTES.UPDATE_RESERVATION, path),
            body
        );
        return data;
    }

    // 예약 삭제
    async deleteReservation(
        req: deleteReservationRequest
    ): Promise<deleteReservationResponse> {
        const { path } = req;
        const { data } = await this._ajax.delete(
            pathToUrl(RESERVATION_ROUTES.DELETE_RESERVATION, path)
        );
        return data;
    }

    // 예약 취소
    async cancelReservation(
        req: deleteReservationRequest
    ): Promise<deleteReservationResponse> {
        const { path } = req;
        const { data } = await this._ajax.delete(
            pathToUrl(RESERVATION_ROUTES.CANCEL_RESERVATION, path)
        );
        return data;
    }
}

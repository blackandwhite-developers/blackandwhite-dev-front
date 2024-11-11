"use client";
import React, { ReactNode, useState } from "react";
import { AbleBtn } from "../../Button/AbleBtn";
import { DisableBtn } from "../../Button/DisableBtn";
import DefaultCheckBox from "../../checkbox/default/DefaultCheckbox";
import HeaderOnly from "../../BottomSheet/HeaderOnly/HeaderOnly";
import styles from "./SocialLoginAlert.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

interface SocialLoginAlertProps {
    className?: string;
}

const SocialLoginAlert = ({ className }: SocialLoginAlertProps) => {
    const [isChecked, setIsChecked] = useState({
        thirdParty: false,
        gender: false,
        age: false,
        birthday: false,
    });
    const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
    const [sheetContent, setSheetContent] = useState("");
    const [sheetTitle, setSheetTitle] = useState("");

    const handleCheckboxChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setIsChecked((prev) => ({
            ...prev,
            [key]: checked,
        }));
    };

    const handleSelectAll = (checked: boolean) => {
        setIsChecked({
            thirdParty: checked,
            gender: checked,
            age: checked,
            birthday: checked,
        });
    }; 

    const openBottomSheet = (title: string, content: string) => {
        setSheetTitle(title);
        setSheetContent(content);
        setBottomSheetOpen(true);
    };

    const closeBottomSheet = () => {
        setBottomSheetOpen(false);
        setSheetTitle("");
        setSheetContent("");
    };

    const isThirdPartyChecked = isChecked.thirdParty;

    return (
        <div className={cx("social-login-alert", className)}>
            <div className={cx("title")}>
                <img src='/icon-asset/login-asset/kakao_social.png' alt="카카오톡 아이콘" />
                <div className={cx("sub_title")}>
                    <h2>카카오톡</h2>
                    <h3>카카오 소셜 로그인</h3>
                </div>
            </div>


            <div className={cx("checkbox-container")}>
                <DefaultCheckBox
                    label="전체 동의하기"
                    checked={isChecked.thirdParty && isChecked.gender && isChecked.age && isChecked.birthday}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className={cx("select-all-checkbox")}
                />
            </div>
            <div className={cx("checkbox-inner")}>
                <p>전체동의는 선택목적에 대한 동의를 포함하고 있으며, 선택목적에 대한 동의를 거부해도 서비스 이용이 가능합니다.</p>
            </div>

            <div className={cx("checkbox-container")}>
                <DefaultCheckBox
                    label="[필수] 카카오 개인정보 제 3자 제공 동의"
                    checked={isChecked.thirdParty}
                    isTransparent={true}
                    onChange={handleCheckboxChange("thirdParty")}
                />
                <button onClick={() => openBottomSheet("카카오 개인정보 제 3자 제공 동의", `
                        <div>
                            <div>
                                <p>아래 항목들은 카카오 소셜 로그인 및 서비스 이용을 위해 필수적으로 제공됩니다.</p>

                                <h4>1. 제공받는 자</h4>
                                <p>카카오의 제휴사 또는 제3자 (서비스별 상세 안내)</p>

                                <h4>2. 제공 목적</h4>
                                <ul>
                                    <li>카카오 계정을 통한 간편 로그인 제공</li>
                                    <li>맞춤형 서비스 및 콘텐츠 제공</li>
                                    <li>광고 및 마케팅 목적</li>
                                </ul>

                                <h4>3. 제공 항목</h4>
                                <ul>
                                    <li>개인 정보: 이름, 성별, 생년월일, 휴대폰 번호, 이메일 주소</li>
                                    <li>프로필 정보: 프로필 사진, 닉네임</li>
                                    <li>서비스 이용 정보: 구매 내역, 접속 시간, 서비스 내 활동 기록 등</li>
                                </ul>

                                <h4>4. 보유 및 이용 기간</h4>
                                <p>동의 철회 시까지 보유 및 이용되며, 법령에 따라 특정 기간 보관이 요구될 경우 해당 기간 동안 보관됩니다.</p>

                                <h4>5. 동의 철회 및 거부 권리</h4>
                                <p>사용자는 개인정보 제3자 제공에 대한 동의를 거부할 권리가 있으며, 이 경우 일부 서비스 이용에 제한이 있을 수 있습니다.</p>
                            </div>
                        </div>`
                    )} className={cx("details-link")}>
                    보기
                </button>
            </div>

            <div className={cx("optional-checkboxes")}>
                <div className={cx("optional-checkboxes-inner")}>
                    <p>[선택] 선택 제공 항목</p>
                    <button onClick={() => openBottomSheet("선택 제공 항목", 
                    `<div>
                        <div>
                            <p>다음 정보들은 카카오 소셜 로그인 및 개인화된 서비스 제공을 위해 선택적으로 수집되며, 동의하지 않더라도 기본 서비스는 이용 가능합니다.</p>

                            <h3>1. 성별</h3>
                            <p>성별 정보는 개인 맞춤형 콘텐츠 추천 및 서비스 개선을 위한 통계 자료로 사용됩니다.</p>
                            <ul>
                                <li>맞춤형 콘텐츠 제공: 성별에 따른 선호도가 반영된 콘텐츠 추천</li>
                                <li>개인화 마케팅: 사용자 성별을 기반으로 한 맞춤형 광고 제공</li>
                                <li>서비스 분석 및 개선: 성별을 기반으로 한 서비스 사용 경향 분석</li>
                            </ul>

                            <h3>2. 연령대</h3>
                            <p>연령대 정보는 적절한 서비스 추천과 연령대별 광고 제공을 위한 목적으로 사용됩니다.</p>
                            <ul>
                                <li>연령대에 따른 콘텐츠 추천: 사용자 연령대에 적합한 콘텐츠 및 서비스 제공</li>
                                <li>맞춤형 광고: 연령대별 선호도가 높은 광고 및 혜택 제공</li>
                                <li>데이터 분석: 연령대별 사용자 활동을 기반으로 서비스 품질 개선</li>
                            </ul>

                            <h3>3. 생일</h3>
                            <p>생일 정보는 생일 축하 메시지와 맞춤형 혜택 제공을 위해 활용됩니다.</p>
                            <ul>
                                <li>생일 축하 메시지 발송: 사용자 생일에 맞춰 축하 메시지 전달</li>
                                <li>생일 특가 혜택 제공: 생일을 기념하여 특별 할인 및 혜택 제공</li>
                                <li>사용자 경험 개선: 사용자 선호도에 맞는 기념일 관련 콘텐츠 및 서비스 추천</li>
                            </ul>

                                <h3>보유 및 이용 기간</h3>
                                <p>제공된 선택 항목 정보는 사용자의 동의 철회 시까지 보유 및 이용되며, 철회 후에는 즉시 삭제됩니다. 단, 관련 법령에 따라 추가 보관이 필요한 경우 해당 기간 동안 보관됩니다.</p>

                                <h3>동의 철회 및 권리</h3>
                                <p>사용자는 언제든지 선택 항목 정보 제공에 대한 동의를 철회할 권리가 있으며, 철회 시 해당 정보는 더 이상 활용되지 않습니다. 동의 철회는 계정 설정 메뉴에서 가능합니다.</p>
                        </div>
                    </div>`
                    )} className={cx("details-link")}>
                        보기
                    </button>
                </div>

                <DefaultCheckBox
                    label="성별"
                    checked={isChecked.gender}
                    onChange={handleCheckboxChange("gender")}
                    className={cx("optional-checkbox")}
                    isTransparent={true}
                />
                <DefaultCheckBox
                    label="연령대"
                    checked={isChecked.age}
                    onChange={handleCheckboxChange("age")}
                    className={cx("optional-checkbox")}
                    isTransparent={true}
                />
                <DefaultCheckBox
                    label="생일"
                    checked={isChecked.birthday}
                    onChange={handleCheckboxChange("birthday")}
                    className={cx("optional-checkbox")}
                    isTransparent={true}
                />
            </div>

            <div className={cx("buttons-container")}>
                {isThirdPartyChecked ? (
                    <AbleBtn label="동의하고 계속하기" onClick={() => alert("동의 완료")} />
                ) : (
                    <DisableBtn label="동의하고 계속하기" />
                )}
            </div>

            <HeaderOnly
                title={sheetTitle}
                content={sheetContent}
                isOpen={isBottomSheetOpen}
                onClose={closeBottomSheet}
            />
        </div>
    );
};

export default SocialLoginAlert;

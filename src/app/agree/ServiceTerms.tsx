import React from 'react';
import styles from './agree.module.scss';

const ServiceTerms = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1>서비스 이용약관</h1>
                <p>
                    본 약관은 [서비스명] (이하 "회사")이 제공하는 모든 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무, 책임 사항 및 기타 필요한 사항을 규정함을 목적으로 합니다.
                </p>
                <p>
                    <strong>제1조 (목적)</strong>
                    <br />
                    이 약관은 회사가 제공하는 서비스의 이용 조건 및 절차, 회사와 이용자 간의 권리 및 의무, 책임 사항 등을 규정하는 것을 목적으로 합니다.
                </p>

                <p>
                    <strong>제2조 (약관의 효력과 변경)</strong>
                    <br />
                    ① 본 약관은 이용자가 회원가입 시 동의함으로써 효력이 발생합니다.
                    <br />
                    ② 회사는 필요한 경우 관련 법령을 위반하지 않는 범위 내에서 본 약관을 개정할 수 있으며, 개정 내용은 서비스 내에 공지합니다.
                    <br />
                    ③ 이용자는 개정된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 회원 탈퇴를 할 수 있습니다.
                </p>
                <p>
                    <strong>제3조 (회원가입 및 이용계약)</strong>
                    <br />
                    ① 이용자는 회사가 정한 절차에 따라 회원가입을 신청할 수 있으며, 회사는 이를 승낙함으로써 이용 계약이 성립됩니다.
                    <br />
                    ② 회원가입 시 제공한 정보에 허위, 기재 누락, 오기 등이 있는 경우 회사는 이용 계약을 해지할 수 있습니다.
                </p>
                <p>
                    <strong>제4조 (서비스의 제공 및 변경)</strong>
                    <br />
                    ① 회사는 이용자에게 다양한 콘텐츠와 기능을 포함한 서비스를 제공합니다.
                    <br />
                    ② 회사는 서비스의 일부 또는 전체를 변경할 수 있으며, 중요한 변경 사항은 사전에 공지합니다.
                </p>
                <p>
                    <strong>제5조 (이용자의 의무)</strong>
                    <br />
                    ① 이용자는 서비스 이용 시 관련 법령 및 본 약관의 규정을 준수해야 합니다.
                    <br />
                    ② 이용자는 타인의 권리나 명예를 침해하거나 불법적인 행위를 해서는 안 됩니다.
                </p>
            </div>
        </div>
    );
};

export default ServiceTerms;
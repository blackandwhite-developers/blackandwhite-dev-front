import React from 'react';
import DefaultAccordion from '../components/arcodian/default/DefaultAccordion';

const TermsOfService = () => {
    return (
        <div>
            <h2>이용약관</h2>
            <DefaultAccordion title="제 1조 (목적)">
                이 약관은 [서비스 이름] (이하 "서비스")이 제공하는 인터넷 서비스의 이용과 관련하여 서비스와 회원 간의 권리, 의무, 책임 사항을 규정함을 목적으로 합니다.
            </DefaultAccordion>
            <DefaultAccordion title="제 2조 (회원의 의무)">
                1. 회원은 서비스를 이용함에 있어 다음 각 호의 행위를 해서는 안 됩니다:
                <ul>
                    <li>가. 타인의 개인정보를 도용하거나 허위 정보를 제공하는 행위</li>
                    <li>나. 불법적인 목적으로 서비스를 사용하는 행위</li>
                    <li>다. 타인의 권리를 침해하는 행위</li>
                </ul>
            </DefaultAccordion>
            <DefaultAccordion title="제 3조 (서비스의 제공 및 변경)">
                서비스 제공자는 필요한 경우 서비스의 내용, 이용 방법 등을 변경할 수 있습니다.
            </DefaultAccordion>
            <DefaultAccordion title="제 4조 (개인정보 보호)">
                서비스 제공자는 회원의 개인정보를 보호하기 위해 최선을 다하며, 개인정보 보호법을 준수합니다.
            </DefaultAccordion>
            <DefaultAccordion title="제 5조 (회원의 해지 및 서비스 종료)">
                회원은 언제든지 본인의 계정을 해지할 수 있으며, 서비스 제공자는 일정 사유가 있을 경우 회원의 계정을 제한하거나 해지할 수 있습니다.
            </DefaultAccordion>
            <DefaultAccordion title="제 6조 (책임의 한계)">
                서비스 제공자는 회원이 서비스 이용 중 발생한 어떠한 손해에 대해서도 책임을 지지 않습니다.
            </DefaultAccordion>
        </div>
    );
};

export default TermsOfService;

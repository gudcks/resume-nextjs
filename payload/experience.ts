import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '마이다스인',
      position: '백엔드 개발자',
      startedAt: '2025-05',
      descriptions: [
        'AI 역량검사 센터(ACCA)의 면접·평가, 대량 발송, 관리자 기능을 개발·운영합니다. 대량 발송의 병목을 줄이고, 실패한 면접 작업을 다시 처리하는 흐름을 개선했습니다. 구버전 Safari를 사용하는 Mac SEB의 영상 답변 업로드 장애를 수정하고 운영 배포 후 동작을 검증했습니다.',
      ],
    },
    {
      title: '그릿스탠다드',
      position: '백엔드 개발자',
      startedAt: '2023-04',
      endedAt: '2025-02',
      descriptions: [
        '물류 플랫폼과 ERP 백엔드를 개발·운영했습니다. 문서·이메일 처리와 ERP 업무를 자동화하고, Kubernetes 배포 파이프라인을 구축했습니다.',
      ],
    },
  ],
};

export default experience;

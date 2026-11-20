import { IIntroduce } from '../component/introduce/IIntroduce';
import { latestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    {
      content:
        '대량 작업에서 처리 상태를 추적하고, 실패한 작업을 복구할 수 있도록 백엔드를 설계합니다.',
    },
    {
      content:
        'Kafka 비동기 처리와 DB 트랜잭션·인덱스 설계로 처리 지연, 중복 작업, 관리자 조회 병목을 개선했습니다.',
    },
    {
      content:
        'FastAPI 서비스 개발과 AWS·Kubernetes·ArgoCD 운영 경험이 있으며, Rust/C++ 연동 및 macOS 오픈소스에도 기여했습니다.',
    },
    {
      content:
        'Codex·Claude Code를 코드 탐색, 리팩터링, 테스트 작성과 교차 리뷰에 활용합니다. 변경 범위와 기존 동작 보존 기준을 직접 정하고, 회귀 테스트와 배포 후 지표로 결과를 검증합니다.',
    },
  ],
  sign: 'Yoo Hyeong Chan',
  latestUpdated: latestUpdatedAt,
};

export default introduce;

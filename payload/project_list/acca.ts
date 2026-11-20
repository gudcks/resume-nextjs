import { IProject } from '../../component/project/IProject';

export const acca: IProject.Item = {
  title: 'AI 역량검사 센터 (ACCA)',
  startedAt: '2025-05',
  where: '마이다스인 (백엔드 개발자)',
  descriptions: [
    {
      content: '5만 건 외부 큐 적재 2시간 → 1분',
      weight: 'MEDIUM',
      descriptions: [
        {
          content:
            '발송 대상·본문 전체 적재와 장시간 트랜잭션, 순차 Kafka 발행이 메모리·DB 부하와 재시작 후 중복 발송 위험을 만들었습니다. 이를 200건 단위 cursor batch·Kafka 비동기 발행·병렬 consumer로 재설계하고 외부 API 호출을 트랜잭션 밖으로 옮겼습니다.',
        },
        {
          content:
            '행 잠금·처리 시도 ID로 중복 선점을 방지하고, 조건부 일괄 갱신·대기 작업 복구·종료 시 처리 정리로 중단된 작업의 재개 흐름을 구성했습니다.',
        },
        {
          content:
            '<b>5만 건의 외부 큐 적재 완료까지 걸리는 애플리케이션 처리 시간을 2시간에서 1분으로 단축</b>했습니다. 별도 SES 발송 단계에서는 <b>초당 약 40건</b>의 처리량을 달성했습니다.',
        },
      ],
    },
    {
      content: 'AI 라이브면접 엔진 Java 이식',
      weight: 'MEDIUM',
      descriptions: [
        {
          content:
            'AI 라이브면접 프로토타입의 면접 엔진을 ACCA Java 백엔드로 이식했습니다. SSE 기반 면접 진행과 실시간 음성 전사 실패 시 재전사 경로를 구현하고, 개발 환경에서 응시 서비스 기동을 확인했습니다.',
        },
        {
          content:
            '관리자 면접 설계 채팅에 변경안 반영·취소·되돌리기를 구현했습니다. <b>실제 LLM 요청 17건</b>으로 검증해 기대 동작과 달랐던 <b>4건</b>을 수정했습니다.',
        },
      ],
    },
    {
      content: '검사 알림 쿼리의 반복 조회·집계 범위 축소',
      weight: 'MEDIUM',
      descriptions: [
        {
          content:
            '후보 조회와 집계를 분리하고 반복 조회를 제거했습니다. st2 응시자 27만 명 규모 테넌트의 접속초과 알림 쿼리에서 <b>Handler reads 277,380 → 1,199</b>를 확인하고, dv·st2 8개 테넌트에서 변경 전후 결과 일치를 검증했습니다.',
        },
      ],
    },
    {
      content: 'BO 발송 모니터 구현 · 엑셀 생성 메모리 절감',
      weight: 'MEDIUM',
      descriptions: [
        {
          content:
            'SQL·API 수작업 조회를 BO 메일·SMS 발송 현황 조회·집계·엑셀 기능으로 옮겼습니다. 행 단위 스트리밍으로 <b>관측 최대 힙 225.9 → 105.3MiB</b>를 확인했습니다(가상 10만 행, JDK 21, 동일 256MiB 힙 제한, 단일 실행 비교).',
        },
      ],
    },
  ],
};

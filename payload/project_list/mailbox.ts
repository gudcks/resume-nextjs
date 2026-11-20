import { IProject } from '../../component/project/IProject';

export const mailbox: IProject.Item = {
  title: '대규모 이메일 처리 시스템 (Mailbox Engine)',
  startedAt: '2023-05',
  endedAt: '2023-11',
  where: 'Grit Standard (백엔드 개발자)',
  descriptions: [
    {
      content: `<figure class="resume-project-flow">
        <figcaption>
          <strong>Lambda 함수 11개 개발</strong>
          <span>수집·처리·저장·검색 단계 분리</span>
        </figcaption>
        <ol role="list" aria-label="메일 처리 시스템의 주요 구성과 역할">
          <li>다중 이메일 계정<small>메일 수집·동기화</small></li>
          <li class="resume-project-flow-key">Lambda 이벤트 처리<small>Kafka MSK</small></li>
          <li>원문 저장·검색<small>S3 · Elasticsearch</small></li>
        </ol>
      </figure>`,
    },
    {
      content:
        '기술 스택: <b>AWS Lambda</b>, <b>Kafka MSK</b>, <b>Amazon S3</b>, <b>Elasticsearch</b>, <b>Node.js</b>, <b>Spring Boot</b>',
      weight: 'BOLD',
      descriptions: [
        {
          content: '문제와 제약',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '여러 메일 계정을 동기화하면서 중복 다운로드와 Elasticsearch·DB 간 상태 불일치를 막고, 저장·검색·이벤트 처리를 분리해야 했습니다.',
            },
          ],
        },
        {
          content: '역할과 판단',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '이메일 UID 상태 관리와 upsert 로직을 적용해 재처리 상황에서도 중복 저장을 방지하도록 설계했습니다.',
            },
            {
              content:
                'Kafka MSK 기반 이벤트 파이프라인으로 컴포넌트 간 결합도를 낮추고 처리 부하를 분산했습니다.',
            },
          ],
        },
        {
          content: '처리 및 운영 개선',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'S3와 Elasticsearch 기반 저장/검색 구조로 대용량 메일 데이터 처리와 검색 성능을 개선했습니다.',
            },
            {
              content:
                'CloudWatch 로그/알람과 장애 복구 흐름을 구성해 운영 모니터링과 데이터 무결성을 강화했습니다.',
            },
          ],
        },
      ],
    },
  ],
};

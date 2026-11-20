import { IProject } from '../../component/project/IProject';

const deliveryAnchor = 'acca-delivery';
const queryAnchor = 'acca-alert-query';

export const accaDeliveryHighlight = {
  label: '메일·SMS 발송 구조 재설계',
  value: '2시간 → 1분',
  context: '5만 건 외부 발송 대기열 등록',
  href: `#${deliveryAnchor}`,
  linkLabel: '발송 구조',
};

const queryReads = { before: 277380, after: 1199 };
const queryReadReduction = ((1 - queryReads.after / queryReads.before) * 100).toFixed(1);
const excelHeap = { before: 225.9, after: 105.3 };
const excelHeapRatio = ((excelHeap.after / excelHeap.before) * 100).toFixed(1);

export const accaQueryHighlight = {
  label: '검사 알림 쿼리의 반복 조회 축소',
  value: `DB 읽기 ${queryReadReduction}% 감소`,
  context: '검증 환경 · 응시자 약 27만 명 규모',
  href: `#${queryAnchor}`,
  linkLabel: '쿼리 검증',
};

export const acca: IProject.Item = {
  title: 'AI 역량검사 센터 (ACCA)',
  startedAt: '2025-05',
  where: '마이다스인 (백엔드 개발자)',
  descriptions: [
    {
      content: '대량 메일·SMS 발송 처리',
      weight: 'MEDIUM',
      descriptions: [
        {
          content: `<figure id="${deliveryAnchor}" class="resume-project-flow">
            <figcaption>
              <strong>${accaDeliveryHighlight.value}</strong>
              <span>메일·SMS ${accaDeliveryHighlight.context} 시간</span>
            </figcaption>
            <ol role="list" aria-label="안내 발송 처리 순서">
              <li>안내 요청</li>
              <li>발송 대상 준비<small>200건씩 조회해 작업 할당</small></li>
              <li class="resume-project-flow-key resume-project-flow-dashed">발송 대기열 등록<small>Kafka 비동기 처리</small></li>
              <li>메일·SMS 발송</li>
            </ol>
          </figure>`,
        },
        {
          content:
            '행 잠금과 처리 시도 ID로 여러 작업자가 같은 건을 동시에 가져가는 것을 막았습니다. 처리 상태를 확인해 일괄 갱신하고, 서비스 종료 시 상태를 정리해 중단된 작업을 다시 처리할 수 있게 했습니다.',
        },
        {
          content:
            '외부 API 호출을 트랜잭션 밖으로 옮기고 발송 결과 이벤트를 병렬로 처리했습니다. SES 발송 단계에서는 <b>초당 약 40건</b>의 처리량을 달성했습니다.',
        },
      ],
    },
    {
      content: 'AI 라이브면접 엔진을 Java 백엔드로 전환',
      weight: 'MEDIUM',
      descriptions: [
        {
          content: `<figure class="resume-project-flow">
            <ol role="list" aria-label="라이브면접 답변 처리 순서">
              <li>답변 음성 입력</li>
              <li class="resume-project-flow-key">실시간으로 음성을 텍스트로 변환<small>실패하거나 결과가 비어 있으면 해당 답변의 녹음으로 다시 변환</small></li>
              <li>답변 제출 후 다음 질문 수신<small>서버 전송 이벤트(SSE)</small></li>
            </ol>
          </figure>`,
        },
        {
          content:
            '초기 버전에서 구현한 면접 엔진을 ACCA의 Java 백엔드로 옮겼습니다. 개발 환경에서 응시 서비스가 정상적으로 시작되는 것을 확인했습니다.',
        },
        {
          content:
            '관리자가 채팅으로 면접 질문 변경안을 적용·취소하거나 적용 전으로 되돌릴 수 있게 했습니다. <b>실제 LLM 요청 17건</b>을 검증해 기대와 다르게 처리된 <b>4건</b>을 수정했습니다.',
        },
      ],
    },
    {
      content: '검사 접속 초과 알림 쿼리 최적화',
      weight: 'MEDIUM',
      descriptions: [
        {
          content: `<figure id="${queryAnchor}" class="resume-metric-comparison">
            <figcaption>
              <strong>DB 읽기 요청 수 ${queryReadReduction}% 감소</strong>
              <small>${accaQueryHighlight.context}</small>
            </figcaption>
            <dl>
              <div><dt>개선 전</dt><dd>${queryReads.before.toLocaleString('ko-KR')}회</dd></div>
              <div><dt>개선 후</dt><dd>${queryReads.after.toLocaleString('ko-KR')}회</dd></div>
            </dl>
          </figure>`,
        },
        {
          content:
            '알림 대상 조회와 집계를 분리해 반복 조회를 줄였습니다. 검증 환경의 검사 데이터셋 8개에서 변경 전후 쿼리 결과가 일치했습니다.',
        },
      ],
    },
    {
      content: '면접 가이드 생성과 응시 로그 저장 복구',
      weight: 'MEDIUM',
      descriptions: [
        {
          content:
            'Lambda가 대기 작업을 넘기는 중 Step Functions 실행 요청이 유실되는 상황을 재현하고, 실행 시작 확인과 재시도를 보강했습니다. Kafka 상태 이벤트로 <b>응시자 537명의 AI 면접 가이드 재생성</b>이 완료된 것을 확인했습니다.',
        },
        {
          content:
            'S3에 직접 올리지 못한 응시 입력 로그를 서버를 거쳐 저장하도록 구현했습니다. 운영 배포 후 <b>이 경로로 저장한 로그 11건</b>을 확인했습니다.',
        },
      ],
    },
    {
      content: '관리자 발송 현황 조회 · 엑셀 생성 메모리 절감',
      weight: 'MEDIUM',
      descriptions: [
        {
          content: `<figure class="resume-metric-comparison resume-metric-comparison-bars">
            <figcaption>
              <strong>엑셀 생성 중 최대 힙 메모리</strong>
              <small>가상 데이터 10만 행 · JDK 21 · 동일 힙 제한 256 MiB · 각 1회 실행</small>
            </figcaption>
            <dl>
              <div>
                <dt>개선 전</dt>
                <dd>
                  <b>${excelHeap.before} MiB</b>
                  <span class="resume-metric-bar" aria-hidden="true" style="--metric-bar-width: 100%"></span>
                </dd>
              </div>
              <div>
                <dt>개선 후</dt>
                <dd>
                  <b>${excelHeap.after} MiB</b>
                  <span class="resume-metric-bar" aria-hidden="true" style="--metric-bar-width: ${excelHeapRatio}%"></span>
                </dd>
              </div>
            </dl>
          </figure>`,
        },
        {
          content:
            'SQL이나 API로 직접 확인하던 메일·SMS 발송 현황을 관리자 화면에서 조회·집계할 수 있게 했습니다. 내려받기용 엑셀에 데이터를 한 행씩 기록해 메모리 사용량을 줄였습니다.',
        },
      ],
    },
  ],
};

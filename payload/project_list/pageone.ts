import { IProject } from '../../component/project/IProject';

export const pageone: IProject.Item = {
  title: '물류 플랫폼 자동화 서비스',
  startedAt: '2024-02',
  endedAt: '2025-02',
  where: 'Grit Standard (백엔드 개발자, 6인 팀)',
  descriptions: [
    {
      content: `<figure class="resume-project-flow">
        <figcaption>
          <strong>약 10초 → 약 1초</strong>
          <span>Java Lambda 첫 실행 대기 시간 · SnapStart 적용 전후</span>
        </figcaption>
        <ol role="list" aria-label="물류 문서의 PDF 변환 및 저장 순서">
          <li>물류 문서</li>
          <li class="resume-project-flow-key">PDF 변환<small>LibreOffice Lambda Layer</small></li>
          <li>S3 저장</li>
        </ol>
      </figure>`,
    },
    {
      content:
        '기술 스택: Java, Spring Boot, JPA/Hibernate, Querydsl, AWS Lambda, MySQL, AWS S3, EKS',
      weight: 'BOLD',
      descriptions: [
        {
          content: '문제와 제약',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '수작업 중심의 물류 데이터 입력과 문서 처리 흐름 때문에 고객 응대 속도와 데이터 일관성이 업무 병목이었습니다.',
            },
            {
              content:
                '물류 도메인 특성상 400개 이상 필드를 가진 복잡한 테이블과 문서 변환, S3 저장, 외부 연동 흐름을 함께 다뤄야 했습니다.',
            },
          ],
        },
        {
          content: '역할과 판단',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '반복 입력과 누락 가능성을 줄이기 위해 물류 도메인 테이블을 정규화하고 핵심 CRUD/API와 외부 데이터 연동·업무 자동화 흐름을 개발했습니다.',
            },
            {
              content:
                '팀 간 API 이해와 데이터 이전 리스크를 줄이기 위해 SQL Migration, Restdocs, Swagger 문서화를 정비했습니다.',
            },
          ],
        },
        {
          content: '업무 자동화 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '물류 업무의 반복 입력과 문서 처리를 자동화해 실무 담당자의 수작업 부담을 줄였습니다.',
            },
            {
              content:
                'AI 기반 PDF 분석 파이프라인으로 인보이스 데이터 추출과 저장을 자동화했습니다.',
            },
          ],
        },
      ],
    },
  ],
};

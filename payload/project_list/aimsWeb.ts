import { IProject } from '../../component/project/IProject';

export const aimsWeb: IProject.Item = {
  title: '물류 ERP 시스템 현대화 프로젝트',
  startedAt: '2023-08',
  endedAt: '2024-08',
  where: 'Grit Standard (백엔드 개발자, 3인 팀)',
  descriptions: [
    {
      content: `<figure class="resume-metric-comparison">
        <figcaption>
          <strong>반복 업무 웹 전환</strong>
          <span>AWS Kubernetes · ArgoCD 기반 GitOps 배포</span>
        </figcaption>
        <dl>
          <div><dt>전환 전</dt><dd>Windows ERP<small>실무 담당자의 반복 작업</small></dd></div>
          <div><dt>전환 후</dt><dd>FastAPI 웹 서비스<small>반복 업무 처리 자동화</small></dd></div>
        </dl>
      </figure>`,
    },
    {
      content:
        '기술 스택: <b>Python</b>, <b>FastAPI</b>, <b>AWS</b>, <b>Docker</b>, <b>Kubernetes</b>, <b>MySQL</b>',
      weight: 'BOLD',
      descriptions: [
        {
          content: '문제와 제약',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Windows ERP의 변경과 배포가 특정 인력에게 집중됐습니다. 기존 업무 흐름을 유지하면서 반복 작업을 웹으로 옮겨야 했습니다.',
            },
          ],
        },
        {
          content: '역할과 판단',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '<b>백엔드 1인 개발자</b>로 실무 담당자와 Windows 개발자 간 요구사항을 조율하고, API 설계와 FastAPI 서비스 구현을 주도했습니다.',
            },
            {
              content:
                '배포 대기와 운영 변경 부담을 줄이기 위해 AWS Kubernetes 클러스터, Docker 배포 환경, ArgoCD 기반 GitOps CI/CD 파이프라인을 도입했습니다.',
            },
          ],
        },
        {
          content: '업무 분담과 배포 개선',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '반복 업무를 웹에서 처리하게 해 실무 담당자의 수작업과 특정 인력 의존을 줄이고, 팀별로 업무를 나눌 수 있게 했습니다.',
            },
            {
              content: 'GitOps 기반 배포 자동화로 배포 반복 작업과 변경 공유 비용을 줄였습니다.',
            },
          ],
        },
      ],
    },
  ],
};

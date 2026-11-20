/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';

import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import { Education } from '../component/education';
import { Etc } from '../component/etc';
import { Project } from '../component/project';
import { Experience } from '../component/experience';
import { Introduce } from '../component/introduce';
import { OpenSource } from '../component/openSource';
import { Presentation } from '../component/presentation';
import { Profile } from '../component/profile';
import { Skill } from '../component/skill';
import { Style } from '../component/common/Style';
import Payload from '../payload';
import { Article } from '../component/article';
import { accaDeliveryHighlight, accaQueryHighlight } from '../payload/project_list/acca';
import { openIdeaMemoryHighlight } from '../payload/openSource';

const highlights = [
  ...(Payload.project.disable ? [] : [accaDeliveryHighlight, accaQueryHighlight]),
  ...(Payload.openSource.disable ? [] : [openIdeaMemoryHighlight]),
];

const sections = [
  { href: '#experience', label: '경력', disabled: Payload.experience.disable },
  { href: '#projects', label: '프로젝트', disabled: Payload.project.disable },
  { href: '#open-source', label: '오픈소스', disabled: Payload.openSource.disable },
  { href: '#skills', label: '기술', disabled: Payload.skill.disable },
].filter(({ disabled }) => !disabled);

function Yosume() {
  return (
    <>
      <Head>
        <title>{Payload._global.headTitle}</title>
        <link rel="shortcut icon" href={Payload._global.favicon} />
        {generateNextSeo(Payload._global.seo)}
      </Head>
      <Container tag="main" className="resume-container" style={Style.global}>
        <Profile.Component payload={Payload.profile} />
        {highlights.length > 0 && (
          <section className="resume-highlights" aria-labelledby="highlights-title">
            <h2 id="highlights-title">대표 성과</h2>
            <div className="resume-highlight-grid">
              {highlights.map(({ label, value, context, href, linkLabel }) => (
                <a className="resume-highlight" href={href} key={href}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <small>{context}</small>
                  <span className="resume-highlight-link">{linkLabel}</span>
                </a>
              ))}
            </div>
          </section>
        )}
        {sections.length > 0 && (
          <nav className="resume-navigation" aria-label="이력서 목차">
            {sections.map(({ href, label }) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
        )}
        <Experience.Component payload={Payload.experience} />
        <Project.Component payload={Payload.project} />
        <OpenSource.Component payload={Payload.openSource} />
        <Skill.Component payload={Payload.skill} />
        <Introduce.Component payload={Payload.introduce} />
        <Education.Component payload={Payload.education} />
        <Etc.Component payload={Payload.etc} />
        <Presentation.Component payload={Payload.presentation} />
        <Article.Component payload={Payload.article} />
      </Container>
    </>
  );
}

export default Yosume;

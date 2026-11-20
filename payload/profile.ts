import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/preview.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  image: image.src,
  name: {
    title: '유형찬',
    small: '',
  },
  contact: [
    {
      title: 'gudcks305@gmail.com',
      link: '',
      icon: faEnvelope,
    },
    {
      title: 'GitHub · gudcks',
      link: 'https://github.com/gudcks',
      icon: faGithub,
    },
  ],
  notice: {
    title: 'Java/Spring 백엔드 개발자',
  },
  summary: '메일·SMS 발송 구조를 재설계하고, 실시간 AI 면접 엔진을 Java 백엔드로 옮겼습니다.',
};

export default profile;

const projects = {
  project1: { title: '어린이 눈건강 지킴이 · 포스터 디자인', image: 'img/p1.jpg', tools: 'Photoshop · Illustrator', overview: '서울시 어린이 눈건강 지킴이 포스터를 재해석하여 나만의 그래픽 스타일로 리디자인한 작품입니다.' },
  project2: { title: '자영업자 고용보험 · 카드뉴스', image: 'img/p2.jpg', tools: 'Photoshop · Illustrator · Figma', overview: '팀원들과 함께 자영업자 고용보험 제도를 분석하고, 복잡한 정책 정보를 가독성 높은 비주얼로 풀어낸 카드뉴스 팀 프로젝트입니다.' },
  project3: { title: '치킨광고 · SNS 배너', image: 'img/p3.jpg', tools: 'Photoshop · Illustrator · Figma', overview: '치킨 브랜드 치킨닥의 아이덴티티를 살려, 소비자의 시선을 사로잡고 클릭을 유도하는 SNS 광고 배너를 팀원들과 함께 기획·제작했습니다.' },
  project4: { title: '쿠키광고', image: 'img/p4.jpg', tools: 'Premiere Pro · CapCut · AI', overview: '생성형 AI와 3D 모션 Premiere Pro로 구현한 따뜻하고 감각적인 쿠키 광고', video: 'https://youtu.be/6tVKb1h_j0s' },
  project5: { title: '전기차 충전기 · 상세페이지', image: 'img/p5.jpg', tools: 'Figma', overview: '실제 기업 공모전 과제를 기반으로 진행한 프로젝트로, 전기차 충전기의 기술적 특장점과 유저 편의성을 직관적인 UI/UX로 시각화한 상세페이지 디자인입니다.' },
  project6: { title: '맛집 추천 앱', image: 'img/Frame 34.jpg', tools: 'After Effects', overview: '기존에 제작한 맛집 추천 앱 UI/UX 디자인 프로젝트를 바탕으로, 애프터이펙트 모션 그래픽을 더해 앱의 직관적인 기능과 경쾌한 사용 흐름을 생동감 있게 구현한 프로모션 영상입니다.', video: 'https://youtu.be/ZxC5EUEA7L4' },
  project7: { title: 'CGV · 웹사이트 디자인', image: 'img/p7.jpg?v=3', website: 'https://qwer4090.github.io/cgv/index.html', pdf: 'ui.pdf', tools: 'Figma · HTML/CSS', overview: 'CGV 웹사이트를 모티브로 삼아 기존 UI/UX의 아쉬운 점을 분석하고, 시네마 플랫폼에 맞추어 영화 예매와 콘텐츠 탐색이 더 편리하도록 직관적으로 재구성한 웹 디자인 프로젝트입니다.' },
  project8: { title: '맛집 추천 앱 · UI/UX 앱 디자인', image: 'img/p8.jpg', pdf: 'app.pdf', tools: 'Figma', overview: '기존 맛집 앱들의 정보 과다 문제를 개선하기 위해 사용자 맞춤형 필터링과 직관적인 네비게이션을 도입하여, 원하는 맛집을 쉽고 빠르게 탐색할 수 있도록 설계한 UX/UI 앱 디자인입니다.' },
  project9: { title: '녹차라떼 · 브랜드 프로모션 광고', image: 'img/p9.jpg', tools: 'Photoshop · Illustrator', overview: '녹차라떼 고유의 깊고 부드러운 풍미를 시각적으로 전달하기 위해, 싱그러운 그린 톤의 컬러 에셋과 감각적인 텍스처를 활용하여 제품의 매력을 극대화한 브랜드 프로모션 포스터입니다.' },
  project10: { title: '운동화 광고', image: 'img/Frame 30.jpg', tools: 'Premiere Pro · After Effects · AI', overview: '생성형 AI 기술을 활용해 방수 기능과 5가지 컬러웨이의 도심 속 러닝 스니커즈를 역동적인 모션으로 담아낸 커머셜 영상입니다.', video: 'https://youtu.be/Ik_4pSb5IgU' },
  project11: { title: '화장품 광고', image: 'img/Frame 32.jpg', tools: 'Premiere Pro · CapCut · AI', overview: '생성형 AI 기술을 활용해 투명한 피부 결은 물론, 골드 앰플의 영양감 넘치는 제형과 프리미엄 팩샷을 감각적인 4컷 구성으로 담아낸 뷰티 커머셜 영상입니다.', video: 'https://youtube.com/shorts/N1wiXuuOrS4?feature=share' },
  project12: { title: '유튜브 인트로', image: 'img/Frame 37.jpg', tools: 'After Effects', overview: '화사한 파스텔톤 컬러 전환과 리듬감 있는 키네틱 타이포그래피를 더해, 디자인 유튜브 채널 용디 만의 경쾌하고 트렌디한 정체성을 감각적으로 풀어낸 인트로 모션 그래픽입니다.', video: 'https://youtu.be/qFM4zPYkno8' }
  



};

// 일반 영상, 공유 주소, 숏츠 주소에서 영상 ID를 찾습니다.
function getYoutubeId(address) {
  const match = address.match(/(?:youtu\.be\/|youtube\.com\/(?:shorts\/|embed\/|watch\?(?:[^#]*&)?v=))([a-zA-Z0-9_-]{11})(?=[?&#/]|$)/);
  return match ? match[1] : '';
}

function openModal(projectId) {
  const project = projects[projectId];
  if (!project) return;
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  modal.querySelectorAll('video').forEach(video => video.pause());
  modalBody.innerHTML = `
    <div class="project-intro">
      
      <h2>${project.title}</h2>
      ${project.pdf ? `<div class="project-actions">
        <a class="btn" href="${project.pdf}" target="_blank" rel="noopener noreferrer">${project.title} PDF 열기</a>
      </div>` : ''}
      <p>${project.overview}</p>
      <p class="project-tools">제작 도구: ${project.tools}</p>
      ${projectId === 'project7' ? `<div class="project-actions">
        ${project.website ? `<a class="btn" href="${project.website}" target="_blank" rel="noopener noreferrer">웹사이트 보기</a>` : '<button type="button" class="btn" disabled>웹사이트 보기 · 주소 연결 예정</button>'}
      </div>` : ''}
      ${project.video ? `<div class="project-actions" aria-label="프로젝트 보기 선택">
        <button type="button" class="btn" id="detail-view-button" aria-pressed="true" onclick="showProjectView('detail')">상세페이지 보기</button>
        <button type="button" class="btn" id="video-view-button" aria-pressed="false" onclick="showProjectView('video')">영상 보기</button>
      </div>` : ''}
    </div>
    <div id="project-detail-view">
      <img src="${project.image}" alt="${project.title} 가상 프로젝트 상세 디자인" class="project-detail-image">
    </div>
    ${project.video ? `<div id="project-video-view" class="video-modal-container" hidden>
      <h3>${project.title} · 영상 보기</h3>
      <iframe data-src="https://www.youtube.com/embed/${getYoutubeId(project.video)}" title="${project.title} 영상" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <a class="btn" href="${project.video}" target="_blank" rel="noopener noreferrer">유튜브에서 영상 보기</a>
    </div>` : ''}
    <div class="modal-btn-wrap"><button class="modal-close-btn" onclick="closeModal()">닫기</button></div>
  `;
  modal.classList.add('active');
  modal.querySelector('.modal-content').scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function showProjectView(view) {
  const detail = document.getElementById('project-detail-view');
  const video = document.getElementById('project-video-view');
  if (!detail || !video) return;
  const showVideo = view === 'video';
  detail.hidden = showVideo;
  video.hidden = !showVideo;
  document.getElementById('detail-view-button').setAttribute('aria-pressed', String(!showVideo));
  document.getElementById('video-view-button').setAttribute('aria-pressed', String(showVideo));
  const youtube = video.querySelector('iframe');
  if (showVideo) {
    if (!youtube.getAttribute('src')) youtube.src = youtube.dataset.src;
  } else {
    youtube.removeAttribute('src');
  }
}
function closeModal() {
  const modal = document.getElementById('modal');
  modal.querySelectorAll('video').forEach(video => video.pause());
  modal.classList.remove('active');
  modal.querySelectorAll('iframe').forEach(frame => frame.removeAttribute('src'));
  document.body.style.overflow = 'auto';
}

function closeModalOnOutside(event) {
  if (event.target.id === 'modal') {
    closeModal();
  }
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

const backToTopBtn = document.getElementById("backToTop");
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

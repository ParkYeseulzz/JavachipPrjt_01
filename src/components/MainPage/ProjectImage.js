import React from 'react'; // React 라이브러리를 임포트합니다.
import './Main.css'; // Main.css 파일을 임포트합니다.
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 react-router-dom 설치
import Project2 from './images/Project2.jpg';
import Project3 from './images/Project3.jpg';
import Project4 from './images/Project4.jpg';
import Project5 from './images/Project5.jpg';
import Project6 from './images/Project6.jpg';
import Exhibitions1 from './images/Exhibitions1.jpg';
import Exhibitions2 from './images/Exhibitions2.jpg';
import Exhibitions3 from './images/Exhibitions3.jpg';
import Store1 from './images/Store1.jpg';
import Store2 from './images/Store2.jpg';
import Store3 from './images/Store3.jpg';
import Store4 from './images/Store4.jpg';
import Banner from './Banner';
import Imageicon from './Imageicon';
import Foodimage1 from './Popimage/Foodimage1.jpg';
import Foodimage2 from './Popimage/Foodimage2.jpg';
import Foodimage3 from './Popimage/Foodimage3.jpg';
import HomeImage1 from './Popimage/HomeImage1.jpg';
import HomeImage2 from './Popimage/HomeImage2.jpg';
import HomeImage3 from './Popimage/HomeImage3.jpg';
import Petimage1 from './Popimage/Petimage1.jpg';
import Petimage2 from './Popimage/Petimage2.jpg';
import Petimage3 from './Popimage/Petimage3.jpg';
import RankingList from './RankingList';

function ProjectImage() {
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져오기
     // 이미지 클릭 시 호출될 함수입니다.
  const handleImageClick = () => {
    navigate('/funding'); // '/funding' 경로로 이동합니다.
  };

  const handleImageClick2 = () => {
    navigate('/funding2'); // 'funding2' 경로로 이동.
  };

  const handleImageClick3 = () => {
    navigate('/funding3'); // funding3 경로로 이동.
  }


  return (
    <div className="container2">
        <div className="left-container">
         <Banner />
         <Imageicon />
          <h2 className="section-title">취향 맞춤 프로젝트</h2>
          <p className="section-title11">지금 함께 만드는 성공</p>
          <div className="image-row">
              <div className="image-item" onClick={handleImageClick}> {/* 이미지 클릭 시 handleImageClick 함수가 호출 */}
              <img src={`${process.env.PUBLIC_URL}/images/piBanner01.jpg`} alt="Banner" className='image' />
              <div className="image-caption">
                      <p className="achievement">6,568% 달성 </p>
                      <p className="description">[명탐정코난] 연재 '30주년' 공식 스페셜 굿즈!</p>
                  </div>
              </div>
              <div className="image-item" onClick={handleImageClick2}>
                  <img alt="Project2" className="image" src={Project2} />
                  <div className="image-caption">
                      <p className="achievement">290% 달성</p>
                      <p className="description">한국형 폭포수 싱크볼 풀세트</p>
                  </div>
              </div>
              <div className="image-item">
                  <img alt="Project3" onClick={handleImageClick3} className="image" src={Project3} />
                  <div className="image-caption">
                      <p className="achievement">730% 달성</p>
                      <p className="description">레트로 감성,디자인을 다 가지고 있는 무선 스피커</p>
                  </div>
              </div>
          </div>
          <div className="image-row">
              <div className="image-item">
                  <img alt="Project4" className="image" src={Project4} />
                  <div className="image-caption">
                      <p className="achievement">350% 달성</p>
                      <p className="description">2024년도가 지나기 전에 쓰는 다이어리</p>
                  </div>
              </div>
              <div className="image-item">
                  <img alt="Project5" className="image" src={Project5} />
                  <div className="image-caption">
                      <p className="achievement">1100% 달성</p>
                      <p className="description">가볍고 편한 일체형 디자인의 모맥스 보조배터리</p>
                  </div>
              </div>
              <div className="image-item">
                  <img alt="Project6" className="image" src={Project6} />
                  <div className="image-caption">
                      <p className="achievement">2900% 달성</p>
                      <p className="description">'찐 프리미엄' 고급스러운 ‘꿀’조합 선물세트!</p>
                  </div>
              </div>
          </div>

           <h2 className="section-title1">스마트 추천 제품</h2>
           <p className="section-title12">이용자들이 인정한 성공 펀딩 집합샵</p>
          <div className="smart-images">
              <div className="image-item2">
                  <img alt="Store1" className="smart-image" src={Store1} />
                  <div className="image-caption">
                      <p className="achievement1">1500% 달성</p>
                      <p className="description1">캠핑러들을 위한</p>
                      <p className="description1">캠핑장에서 필요한 모든 것 풀세트</p>
                  </div>
              </div>
              <div className="image-item">
                  <img alt="Store2" className="smart-image" src={Store2} />
                  <div className="image-caption">
                      <p className="achievement1">1300% 달성</p>
                      <p className="description1">아직도 노트북 수납을 고민 하시나요?</p>
                      <p className="description1">클래식 감성의 캔버스 레더 ‘아이브백’ 노트북 수납 가능</p>
                  </div>
              </div>
              <div className="image-item2">
                  <img alt="Store3" className="smart-image" src={Store3} />
                  <div className="image-caption">
                      <p className="achievement1">500% 달성</p>
                      <p className="description1">아직도 들고 다니세요? </p>
                      <p className="description1"> 두 손이 자유로운 슬림 블루필 넥밴드 선풍기 </p>
                      
                  </div>
              </div>
              <div className="image-item2">
                  <img alt="Store4" className="smart-image" src={Store4} />
                  <div className="image-caption">
                      <p className="achievement2">1500% 달성</p>
                      <p className="description2">아이들과 여행다닐 때 필수탬 유모차</p>
                      <p className="description2">유모차 중 가장 가벼운 4kg대의 초경량 휴대용 유모차</p>
                  </div>
              </div>
          </div>

          <h2 className="section-title2">기획전</h2>
                

          <div className="exhibition-images">
                {/* 첫 번째 메인 섹션 */}
                    <div className="image-item1">
                    <div className="main-image-container">   
                        <img alt="Exhibitions1" className="exhibition-image1" src={Exhibitions1} />
                        <div className="overlay-text">조금 다른 한끼 식사</div>
                    </div>
                        <h3 className="image-caption1">외식이 부럽지 않은 밀키트</h3>
                    <div className="image-caption1">
                        
                    <div className="sub-image-text-container">            
                        <div className="sub-image-item">
                            <img alt="Foodimage1" className="sub-exhibition-image" src={Foodimage1} />
                        </div>
                        <div className="sub-text-content">
                            <p className="achievement2">자연산 백골뱅이와 쫄깃한 어묵의 조합이라니!
                                                        칼칼하고 시원한 국물맛의 오뎅뱅이탕! </p>
                        </div>
                    </div>

                    <div className="sub-image-text-container"> 
                        <div className="sub-image-item">
                            <img alt="Foodimage2" className="sub-exhibition-image" src={Foodimage2} />
                        </div>
                        <div className="sub-text-content">
                            <p className="achievement2">[밀키트]대구에서 가장 핫한 막창집!
                                                        막삼가의 시그니처 메뉴를 집에서도 즐기세요</p>
                        </div>
                    </div>

                    <div className="sub-image-text-container"> 
                        <div className="sub-image-item">
                            <img alt="Foodimage3" className="sub-exhibition-image" src={Foodimage3} />
                        </div>    
                        <div className="sub-text-content">
                            <p className="achievement2">[쪽갈비] 오로지 국내산 돼지갈비로만
                                                        꽉꽉 담았습니다!
                                                        국내산 매운 갈비찜!</p>
                        </div>
                    </div>

                    </div>
                    </div>

                {/* 두 번째 메인 섹션 */}
                <div className="image-item1">
                    <div className="main-image-container">   
                        <img alt="Exhibitions2" className="exhibition-image1" src={Exhibitions2} />
                        <div className="overlay-text">서포터가 주목하는</div>
                        </div>
                        <h3 className="image-caption1">시선집중 스페셜 기획전</h3>
                        <div className="image-caption1">
                <div className="sub-image-text-container"> 
                <div className="sub-image-item">
                <img alt="HomeImage1" className="sub-exhibition-image" src={HomeImage1} />
                </div>
                <div className="sub-text-content">
                    <p className="achievement2">[까사무띠] 핸드메이드 테이블 웨어 브랜드 다양한 컬러와
                                                디자인의 실리콘 매트</p>
                </div>
            </div>
            <div className="sub-image-text-container"> 
            <div className="sub-image-item">
            <img alt="HomeImage2" className="sub-exhibition-image" src={HomeImage2} />
            </div>
                <div className="sub-text-content">
                    <p className="achievement2">[국내 런칭] 30년 수면 연구 개발 극찬 베개,
                                                전 세계 누적 펀딩 63억을 돌파 브레인슬립</p>
                </div>
            </div>
            <div className="sub-image-text-container"> 
            <div className="sub-image-item">
                <img alt="HomeImage3" className="sub-exhibition-image" src={HomeImage3} />
                </div>
                <div className="sub-text-content">
                    <p className="achievement2">[무드등] 몽환적인 은하수 감성,
                                                360도 어느 곳에서도 빛나는 오묘한
                                                오로라 무드등 </p>
                </div>
            </div>
                    </div>
                    </div>

                {/* 세 번째 메인 섹션 */}
                <div className="image-item1">
                    <div className="main-image-container">   
                        <img alt="Exhibitions3" className="exhibition-image1" src={Exhibitions3} />
                        <div className="overlay-text">펫 위크</div>
                        </div>
                        <h3 className="image-caption1">우리 집 댕냥이를 위한</h3>
                        <div className="image-caption1">
                <div className="sub-image-text-container">            
                <div className="sub-image-item">
                <img alt="Petimage1" className="sub-exhibition-image" src={Petimage1} />
                </div>
                <div className="sub-text-content">
                    <p className="achievement2">[진공미용기] 털 날림 없이 깨끗하게
                                                스마트 진공 미용기 고양이 강아지
                                                애견바리깡</p>
                </div>
            </div>
            <div className="sub-image-text-container"> 
            <div className="sub-image-item">
                <img alt="Petimage2" className="sub-exhibition-image" src={Petimage2} />
                </div>
                <div className="sub-text-content">
                    <p className="achievement2">[자동화장실] 고양이 자동화장실 (WIFI 연결) 
                                                더 강력해져서 돌아왔다! 홈 IoT 자동  </p>
                </div>
            </div>
            <div className="sub-image-text-container"> 
            <div className="sub-image-item">
                <img alt="Petimage3" className="sub-exhibition-image" src={Petimage3} />
                </div>
                <div className="sub-text-content">
                    <p className="achievement2">[방충망] 고양이 추락·탈출 방지ㅣ
                                                방묘창보다 강력한 철벽방어 
                                                초미세 촘촘망</p>
                </div>
                 </div>
                  </div>
                  </div>
    
            </div>
      </div>
      <div className="right-container">
        <RankingList/>
        {/* 메인화면의 오른쪽 DIV 
            실시간 자리*/}
      </div>
    </div>
  );
}

export default ProjectImage;
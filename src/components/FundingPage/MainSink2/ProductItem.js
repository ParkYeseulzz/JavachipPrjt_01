import React, { useState } from 'react';
import Slider from 'react-slick';
import './ProductItem.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MessagePopup from './MessagePopup';
import InquiryPopup from './InquiryPopup';


function SellerIntro({ onFollow, onQuestion }) {
  return (
    <div className='F_sellerintro'>
      <div className='F_sellerintro-header'>
        <p className='F_introduce'>창작자 소개</p>
        <p className='F_seller-name'>다채 창작자</p>
      </div>
      <p className='F_seller-description'>한 호마다 하나의 인터뷰 소재를 가지고 사람들을 심층 인터뷰합니다. 2019년 2월부터 여러 가지 빛깔이 어우러진 사회를 만들기 위한 프로젝트를 진행하고 있습니다. Instagram : dachae_magazine / E-mail : dachae.editor@gmail.com</p>
      <div className='F_seller-actions'>
        <button className='F_follow' onClick={onFollow}>팔로우</button>
        <button className='F_question' onClick={onQuestion}>창작자 문의</button>
      </div>
    </div>
  );
}

function ProductItem() {
  const product = {
    name: 'CD플레이어 열풍 막차탈게요, 레트로 감성에 무선 스피커 기능까지',
    description: '아이돌 굿즈 부터 음원까지 다시 돌아온 CD플레이어 열풍, 레트로한 턴테이블 감성의 디자인에 무선 스피커 기능까지 잡아낸 CD플레이어는 플레오맥스가 처음일거에요!',
    fundingRate: '5,142%',
    goal: '목표 금액 : ',
    supporters: '385명 참여'
  };

  const images = [
    `${process.env.PUBLIC_URL}/images/CD1.jpg`,
    `${process.env.PUBLIC_URL}/images/CD2.jpg`,
    `${process.env.PUBLIC_URL}/images/CD3.jpg`,
    `${process.env.PUBLIC_URL}/images/CD4.jpg`,
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isMessagePopupVisible, setIsMessagePopupVisible] = useState(false);
  const [isInquiryPopupVisible, setIsInquiryPopupVisible] = useState(false);

  const handleSearch = () => {
    if (searchQuery && !searchHistory.includes(searchQuery)) {
      setSearchHistory(prevHistory => [searchQuery, ...prevHistory.slice(0, 4)]);
    }
    setSearchQuery('');
  };

  const handleHistoryClick = (item) => {
    setSearchQuery(item);
    setIsHistoryVisible(false);
  };

  const handleFollow = () => {
    setPopupMessage('예슬 창작자의 첫 번째 팬이 되셨습니다 !');
    setIsMessagePopupVisible(true);
  };

  const handleQuestion = () => setIsInquiryPopupVisible(true);
  const handleCloseMessagePopup = () => setIsMessagePopupVisible(false);
  const handleCloseInquiryPopup = () => setIsInquiryPopupVisible(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopupMessage('문의가 성공적으로 제출되었습니다.');
    setIsInquiryPopupVisible(false);
    setIsMessagePopupVisible(true);
  };

  return (
    <div className="F_ProductItemContainer">
      <div className="F_ProductItem">
        <div className="F_ImageSlider">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index}`} className="F_slider-image" />
              </div>
            ))}
          </Slider>
        </div>

        <div className="F_ProjectDetails">
          <div className='F_search-bar'>
            <input
              type='text'
              placeholder='검색어를 입력하세요'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsHistoryVisible(true)}
              onBlur={() => setTimeout(() => setIsHistoryVisible(false), 200)}
            />
            <button onClick={handleSearch}></button>
            <div
              className='F_search-history'
              style={{ display: isHistoryVisible ? 'block' : 'none' }}
            >
              {searchHistory.map((item, index) => (
                <div
                  key={index}
                  className='F_search-history-item'
                  onClick={() => handleHistoryClick(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="F_detail-item">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
          <div className="F_funding-status">
            <h3>{product.fundingRate} 달성</h3>
            <h2>{product.goal}</h2>
            <h3>달성 금액 : 0 원 달성</h3>
            <p>{product.supporters}</p>
          </div>
          <SellerIntro onFollow={handleFollow} onQuestion={handleQuestion}/>
        </div>
      </div>
      {isMessagePopupVisible && (<MessagePopup message={popupMessage} onClose={handleCloseMessagePopup} />)}
      {isInquiryPopupVisible && (<InquiryPopup onClose={handleCloseInquiryPopup} onSubmit={handleSubmit} />)}
    </div>
  );
}

export default ProductItem;
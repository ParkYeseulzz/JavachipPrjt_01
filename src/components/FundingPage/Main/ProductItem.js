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
        <p className='F_seller-name'> 창작자</p>
      </div>
      <p className='F_seller-description'>여러 경험과 경험 속 각인된 모든 향을 기반으로 웨어러블한 다양한 향을 선보입니다. 펀딩이 종료된 향수는 공식 홈페이지에서 추가 구입이 가능합니다.</p>
      <div className='F_seller-actions'>
        <button className='F_follow' onClick={onFollow}>팔로우</button>
        <button className='F_question' onClick={onQuestion}>창작자 문의</button>
      </div>
    </div>
  );
}

function ProductItem() {
  const product = {
    name: '[명탐정코난] 연재 \'30주년\' 축하 기념 TV판 공식 스페셜 굿즈!',
    description: '명탐정코난 연재 30주년 스페셜 파티에 여러분을 초대합니다! 소장가치 넘치는 굿즈들! 평생 곁을 지켜 줄 만년달력, 베스트 아트워크로 구성된 스티커북, 그리고 스페셜 키링까지!',
    fundingRate: '4,929%',
    goal: '목표 금액 : ',
    supporters: '582명 참여'
  };

  const images = [
    `${process.env.PUBLIC_URL}/images/piBanner01.jpg`,
    `${process.env.PUBLIC_URL}/images/piBanner02.jpg`,
    `${process.env.PUBLIC_URL}/images/piBanner03.jpg`,
    `${process.env.PUBLIC_URL}/images/piBanner04.gif`,
    `${process.env.PUBLIC_URL}/images/piBanner05.jpg`,
    `${process.env.PUBLIC_URL}/images/piBanner06.jpg`,
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

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
        <p className='F_seller-name'>아리샘 창작자</p>
      </div>
      <p className='F_seller-description'>기업의 사회적 책임에 더 관심이 있는 기업입니다.   고객에게 제품이 주는 그 이상의 가치를 제공하도록 노력해왔습니다. 
        건강을 소중히 여기는 업체로서 국내외에 정수기, 커피머신 필터 등을 판매하는 제조회사입니다. 
        아리샘(Arisaem)은 창하의 정수기 브랜드이며 좋은 물을 공급하기 위해 언제나 최선을 다 하고 있습니다.</p>
      <div className='F_seller-actions'>
        <button className='F_follow' onClick={onFollow}>팔로우</button>
        <button className='F_question' onClick={onQuestion}>창작자 문의</button>
      </div>
    </div>
  );
}

function ProductItem() {
  const product = {
    name: '한국형 폭포수 싱크볼 풀세트 펀딩할래! 런칭',
    description: '한국형으로 제작되어 출시된 풀포수 싱크볼 풀세트 입니다. 세련된 주방을 위해선 필수',
    fundingRate: '335%',
    goal: '목표 금액 : ',
    supporters: '80명 참여'
  };

  const images = [
    `${process.env.PUBLIC_URL}/images/sink1.jpg`,
    `${process.env.PUBLIC_URL}/images/sink2.jpg`,
    `${process.env.PUBLIC_URL}/images/sink3.jpg`,
    `${process.env.PUBLIC_URL}/images/sink4.jpg`,
    `${process.env.PUBLIC_URL}/images/sink5.jpg`,
    `${process.env.PUBLIC_URL}/images/sink6.jpg`,
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
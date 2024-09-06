import React, { useState } from 'react';
import './SalesPage.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';

const product = [
  { id: 1, left: '10개 남음', price: 50000, description: '[얼리버드] 코난 연재 30주년 풀 세트 + 특전 포토카드 4장', description2: '-만년달력 -메탈 키링 2종 세트 -스티커북 -특전 포토카드 4장', shippingCost: '3,500원', limit: '100개', shippingDate: '2024년 9월 초 (01~10일) 예정' },
  { id: 2, left: '20개 남음', price: 70000, description: '[얼리버드] 코난 연재 30주년 풀 세트 + 특전 포토카드 4장', description2: '-만년달력 -메탈 키링 2종 세트 -스티커북 -특전 포토카드 4장 -특전 포토카드 랜덤 1장', shippingCost: '3,500원', limit: '100개', shippingDate: '2024년 9월 초 (01~10일) 예정' },
  { id: 3, left: '15개 남음', price: 90000, description: '[얼리버드] 코난 연재 30주년 풀 세트 + 특전 포토카드 4장', description2: '-만년달력 -메탈 키링 2종 세트 -스티커북 -특전 포토카드 4장', shippingCost: '3,500원', limit: '100개', shippingDate: '2024년 9월 초 (01~10일) 예정' },
  { id: 4, left: '30개 남음', price: 100000, description: '[얼리버드] 코난 연재 30주년 풀 세트 + 특전 포토카드 4장', description2: '-만년달력 -메탈 키링 2종 세트 -스티커북 -특전 포토카드 4장 -특전 포토카드 랜덤 1장', shippingCost: '3,500원', limit: '100개', shippingDate: '2024년 9월 초 (01~10일) 예정' },
];

const SalesPage = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [likeCount, setLikeCount] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // 리워드 선택 처리 함수
  const handleSelectProduct = (product) => {
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.includes(product)
        ? prevSelectedProducts.filter(p => p !== product)
        : [...prevSelectedProducts, product]
    );
  };

  // 좋아요 버튼 클릭 시 처리 함수
  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  // 공유 팝업 토글 함수
  const handlePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  // 소셜 공유 처리 함수
  const handleSocialShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('공유');
    let shareUrl;

    switch (platform) {
      case 'kakao':
        shareUrl = `https://www.kakaocorp.com/page/service/service/KakaoTalk=${url}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${text}&body=${window.location.href}`;
        break;
      case 'clipboard':
        navigator.clipboard.writeText(window.location.href)
          .then(() => alert('링크가 클립보드에 복사되었습니다!'))
          .catch((error) => console.error('복사 실패', error));
        return;
      default:
        return;
    }
    if (platform !== 'clipboard') {
      window.open(shareUrl, '_blank');
    }
  };

  // 이메일 공유 처리 함수
  const handleEmailShare = () => {
    const subject = encodeURIComponent('공유');
    const body = encodeURIComponent(`이 멋진 리워드를 발견했습니다. 공유해보세요! ${window.location.href}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className='F_container'>
      <div className="F_content">
        <div className="F_category-tabs-container">
          <div className="F_category-tabs">
            <ul>
              <li className="F_active"><Link to="/" className="F_tab-link">프로젝트 계획</Link></li>
              <li><Link to="/updates" className="F_tab-link">업데이트</Link></li>
              <li><Link to="/comments" className="F_tab-link">커뮤니티</Link></li>
              <li><Link to="/reviews" className="F_tab-link">후기</Link></li>
            </ul>
          </div>
        </div>
        <div className="F_category-tabs-container2">
          <div className="F_category-tabs2">
            <ul>
              <li className="F_active"><ScrollLink to="section1" className="F_tab-link2" smooth duration={800}>소개1</ScrollLink></li>
              <li><ScrollLink to="section2" className="F_tab-link2" smooth duration={800}>소개2</ScrollLink></li>
              <li><ScrollLink to="section3" className="F_tab-link2" smooth duration={800}>소개3</ScrollLink></li>
              <li><ScrollLink to="section4" className="F_tab-link2" smooth duration={800}>소개4</ScrollLink></li>
            </ul>
          </div>
        </div>

        <Element name="section1">
          <h2>소개1</h2>
          <img src={`${process.env.PUBLIC_URL}/images/Conan01.gif`} alt="코난01" />
          <img src={`${process.env.PUBLIC_URL}/images/Conan02.jfif`} alt="코난02" />
          <img src={`${process.env.PUBLIC_URL}/images/Conan03.gif`} alt="코난03" />
        </Element>
        <Element name="section2">
          <h2>소개2</h2>
          <img src={`${process.env.PUBLIC_URL}/images/Conan04.jfif`} alt="코난04" />
        </Element>
        <Element name="section3">
          <h2>소개3</h2>
          <img src={`${process.env.PUBLIC_URL}/images/Conan05.jfif`} alt="코난05" />
          <img src={`${process.env.PUBLIC_URL}/images/Conan06.jpg`} alt="코난06" />
          <img src={`${process.env.PUBLIC_URL}/images/Conan07.gif`} alt="코난07" />
        </Element>
        <Element name="section4">
          <h2>소개4</h2>
          <img src={`${process.env.PUBLIC_URL}/images/Conan08.webp`} alt="코난08" />
          <img src={`${process.env.PUBLIC_URL}/images/Conan09.webp`} alt="코난09" />
          <img src={`${process.env.PUBLIC_URL}/images/Conan10.jfif`} alt="코난10" />
        </Element>
      </div>
      
      {/* 오른쪽 리워드 선택 영역 */}
      <div className='F_payment'>
        <h2>리워드 선택</h2>
        <div className='F_reward-list'>
          <ul className='F_selectfunding'>
            {product.map((item) => (
              <li key={item.id} className={`product-item ${selectedProducts.includes(item) ? 'selected' : ''}`} onClick={() => handleSelectProduct(item)}>
                <div className="F_reward-info">
                  <p>{item.left}</p>
                  <h3>{item.price.toLocaleString()} 원</h3> {/* 가격을 숫자로 표시 */}
                  <p>{item.description}</p>
                  <p>{item.description2}</p>
                  <div className="F_additional-info">
                    <p>배송비: {item.shippingCost}</p>
                    <p>발송 시작일: {item.shippingDate}</p>
                    <p>제한 수량: {item.limit}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {selectedProducts.length > 0 && (
          <div className='F_selected-products'>
            <h2>선택한 리워드</h2>
            {selectedProducts.map((item) => (
              <div key={item.id} className="F_selected-product">
                <div className="F_reward-info">
                  <h3>{item.price.toLocaleString()} 원</h3>
                  <p>{item.description}</p>
                  <p>{item.description2}</p>
                  <div className="F_additional-info">
                    <p>배송비: {item.shippingCost}</p>
                    <p>제한 수량: {item.limit}</p>
                    <p>발송 시작일: {item.shippingDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 하단 고정 버튼 영역 */}
        <div className="F_action-buttons">
          <div className="F_interaction-buttons">
            <button className="F_like-button" onClick={handleLikeClick}>
              <img src={`${process.env.PUBLIC_URL}/images/하트.png`} alt="F_Heart Icon" /> {likeCount}
            </button>
            <button className="F_share-button" onClick={handlePopupToggle}>
              <img src={`${process.env.PUBLIC_URL}/images/공유.png`} alt="F_Share Icon" /> 공유하기
            </button>
          </div>
          <Link to="/login" className="F_funding-button">펀딩하기</Link>
        </div>

        {isPopupVisible && (
          <div className="F_share-popup">
            <button className='F_kakao' onClick={() => handleSocialShare('kakao')}>
              <img  src={`${process.env.PUBLIC_URL}/images/카카오톡.png`} alt="카카오톡 아이콘"/>카카오톡으로 공유하기</button>
            <button className='F_email' onClick={handleEmailShare}><img src={`${process.env.PUBLIC_URL}/images/링크보드.png`}  alt="이메일 아이콘" />이메일로 공유하기</button>
            <button className='F_link' onClick={() => handleSocialShare('clipboard')}><img src={`${process.env.PUBLIC_URL}/images/이메일.png`} alt="클립보드 아이콘" />링크 보드에 복사하기</button>
            <button onClick={handlePopupToggle}>닫기</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SalesPage;

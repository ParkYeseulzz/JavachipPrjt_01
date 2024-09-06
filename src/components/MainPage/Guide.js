import React from 'react';
import './Main.css'; // CSS 파일을 임포트합니다.
import Footer from './images/Footer.gif';// 900x300px 이미지 파일을 임포트합니다.
import { Link } from 'react-router-dom'; // Link 컴포넌트를 임포트합니다.


function Guide() {
    return (
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-image-wrapper">
              <img src={Footer} alt="Footer" className="footer-image" />
                <div className="footer-text-overlay">
                  <h2>펀딩할래가 처음인 당신을 위해 꼭 알아야 할</h2>
                  <p>창작자 가이드와 첫 후원 가이드를 확인해 보세요!</p>
                </div>
                <div className="footer-buttons">
                <Link to="/creator" className="guide-button">창작자 가이드</Link>
                <Link to="/sponsor" className="donation-button">후원자 가이드</Link>
                </div>
              </div>

          </div>
          <div className="footer-container">
            <div className="footer-left2">
            <div>이용약관 | 개인정보처리방침</div>
            </div>
            <div className="footer-right">
              <button>공지사항</button>  <button>서비스 소개</button>  <button>제휴문의</button>  <button>채팅 상담</button>
          </div>
          </div>

          <div className="footer-bottom">
            <p className="company-name">회사명 | (주)펀딩할래</p>
            <p>주소 | 충청남도 천안시 봉명동 258, 1층(A타워)</p>
            <p>사업자등록번호 123-33-45678</p>

            <p>이메일 상담 info@human.kr | 유선 상담 1588-0000 | © 펀딩할래! co. Ltd </p>
            <p>
            일부 상품의 경우 펀딩할래!는 통신판매중개자이며 통신판매 당사자가 아닙니다. 해당되는 상품의 경우 상품, 상품정보, 거래에 관한 의무와 책임은 판매자에게 있으므로, 각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.
            </p>
            <p>
            펀딩할래! 사이트의 리뷰와 정보, 메이커 정보, 스토리 정보, 콘텐츠, UI 등에 대한 무단복제, 전송, 배포, 프레임, 스크래핑 등의 행위는
            저작권법, 콘텐츠산업 진흥법 등 관련 법령에 의하여 엄격히 금지됩니다.
            콘텐츠산업 진흥법에 따른 표시</p>
            </div>
          <div className="footer-middle">
              <div className="footer-service">
                  <p>펀딩할래 고객센터</p>
                  <p>고객지원 : 평일 09:00 ~ 17:30 </p>
                  <p>점심시간 : 평일 13:00 ~ 15:00 </p>
              </div>
          </div>
      </div>
      </footer>
    );
  }
  

export default Guide;
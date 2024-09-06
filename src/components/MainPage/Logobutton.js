import React, { useState, useEffect, useContext, useRef } from 'react';
import './Main.css';
import logo from './Logo.png';

import { FaSearch, FaTimes } from 'react-icons/fa'; // 검색 및 삭제 아이콘을 import
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../api/AuthContext';


// Logobutton 컴포넌트 정의
const Logobutton = () => {
  // 상태 정의: 검색어, 최근 검색어 목록, 드롭다운 메뉴 표시 여부
  const [searchTerm, setSearchTerm] = useState(''); // 현재 검색어 상태
  const [recentSearches, setRecentSearches] = useState([]); // 최근 검색어 목록 상태
  const [isDropdownVisible, setDropdownVisible] = useState(false); // 드롭다운 메뉴 표시 여부
  const dropdownRef = useRef(null); // 드롭다운 참조용 ref

  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(AuthContext); // 로그인 상태와 사용자 정보를 가져오기


  
  useEffect(() => {
    console.log('Logobutton 컴포넌트의 로그인 상태:', isLoggedIn);
  }, [isLoggedIn]);


  const handleLogout = () => {
    logout();
    navigate('/login'); // 로그아웃 후 로그인 페이지로 이동
  };

  const handleLoginSignupClick = () => {
    navigate('/login'); // 로그인 페이지로 이동
  };

  const handleMyPageClick = () => {
    navigate('/mypage'); // 마이페이지로 이동
  };


  // 컴포넌트가 마운트될 때(처음 렌더링될 때) 로컬 스토리지에서 최근 검색어 목록을 불러옴
  useEffect(() => {
    const savedSearches = JSON.parse(localStorage.getItem('recentSearches')) || []; // 로컬 스토리지에서 최근 검색어 가져오기
    setRecentSearches(savedSearches); // 상태에 저장
  }, []);

  // 로고 클릭 시 홈페이지로 이동
  const handleLogoClick = () => {
    window.location.href = 'https://ys2ys2.github.io/JavachipPrjt_01/'; // 프로젝트 메인 페이지로 이동
  };

  // 검색 기능: 검색어를 최근 검색어 목록에 추가하고, 드롭다운 메뉴를 표시
  const handleSearch = () => {
    if (searchTerm) {
      // 중복 제거 및 최대 5개까지 최근 검색어 목록 업데이트
      const updatedSearches = [searchTerm, ...recentSearches.filter(term => term !== searchTerm)].slice(0, 5);
      setRecentSearches(updatedSearches); // 상태에 업데이트된 검색어 목록 저장
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches)); // 로컬 스토리지에 저장
      console.log('Searching for:', searchTerm); // 검색어를 콘솔에 출력
      setSearchTerm(''); // 검색어 입력 필드를 초기화
      setDropdownVisible(true); // 드롭다운 메뉴 표시
    }
  };

  // 검색어 입력 시 상태 업데이트
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value); // 입력된 검색어를 상태에 저장
  };

  // 최근 검색어 클릭 시 해당 검색어로 검색 실행
  const handleRecentSearchClick = (term) => {
    setSearchTerm(term); // 클릭된 검색어를 상태에 저장
    handleSearch(); // 검색 실행
  };

  // Enter 키를 눌렀을 때 검색 실행
  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(); // Enter 키를 누르면 검색 실행
    }
  };

    // 드롭다운 외부 클릭 시 드롭다운 숨기기
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownVisible(false);
      }
    };

      // 컴포넌트 마운트 시 외부 클릭 감지 설정
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);



  // 검색 아이콘 클릭 시 검색 실행
  const handleIconClick = () => {
    handleSearch(); // 검색 아이콘 클릭 시 검색 실행
  };

  // 최근 검색어 삭제 기능
  const handleRemoveSearch = (termToRemove) => {
    const updatedSearches = recentSearches.filter(term => term !== termToRemove); // 삭제할 검색어를 목록에서 제외
    setRecentSearches(updatedSearches); // 상태에 업데이트된 목록 저장
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches)); // 로컬 스토리지에 저장
  };

  // 로그인/회원가입 버튼 클릭 시 login 페이지로 이동하는 navigate
  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate('/mypage'); // 마이페이지로 이동
    } else {
      navigate('/login'); // 로그인 페이지로 이동
    }
  };





  // 프로젝트 만들기 버튼 클릭 시 알림 표시
  const handleProjectCreateClick = () => {
    alert('프로젝트 만들기 버튼이 클릭되었습니다.'); // 클릭 시 알림
  };

  // 컴포넌트 UI 렌더링
  return (
    <div className="container">
      {/* 헤더: 로고 및 버튼 그룹 */}
      <header className="header">
        <button onClick={handleLogoClick} className="logoButton">
          <img src={logo} alt="홈으로 이동" className="logoImage" /> {/* 로고 이미지 */}
        </button>
        <div className="buttonGroup">
          {isLoggedIn ? (
            <>
              <button onClick={handleMyPageClick} className="loginSignupButton">마이페이지</button>
              <button onClick={handleLogout} className="logoutButton">로그아웃</button>
            </>
          ) : (
            <button onClick={handleLoginSignupClick} className="loginSignupButton">로그인/회원가입</button>
          )}
          
          <button onClick={handleProjectCreateClick} className="project-button1">프로젝트 만들기</button> {/* 프로젝트 만들기 버튼 */}
        </div>
      </header>

      {/* 검색 입력 및 최근 검색어 드롭다운 */}
      <div className="inputContainer" ref={dropdownRef}>
        <div className="searchBox">
          <FaSearch className="searchIcon" onClick={handleIconClick} /> {/* 검색 아이콘 */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
            className="input"
            placeholder="검색어를 입력하세요..."
          />
        </div>

        {/* 최근 검색어 드롭다운 표시 */}
        {isDropdownVisible && recentSearches.length > 0 && (
          <div className="recentSearches">
            <h4>최근 검색어</h4>
            <ul>
              {recentSearches.map((term, index) => (
                <li key={index}>
                  {term}
                  <FaTimes className="removeIcon" onClick={() => handleRemoveSearch(term)} /> {/* 검색어 삭제 아이콘 */}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logobutton;
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // HashRouter 사용
import MainPageApp from './components/MainPage/App';
import FundingPageApp from './components/FundingPage/App';
import SalesPage from './components/FundingPage/Main/SalesPage';
import CommentsPrjt from './components/FundingPage/comments/CommentsPrjt';
import MyPage from './components/FundingPage/MyPage/MyPage';
import ReviewList from './components/FundingPage/comments/ReviewList';
import FundingPage2App from './components/FundingPage/MainSink/App';
import FundingPage3App from './components/FundingPage/MainSink2/App';
import CommentsPrjt2 from './components/FundingPage/comments/CommentsPrjt2';
import CommentsPrjt3 from './components/FundingPage/comments/CommentsPrjt3';
import ReviewList2 from './components/FundingPage/comments/ReviewList2';
import LoginJs from './components/RegPage/Login/Login';
import SignUpJs from './components/RegPage/SignUp/SignUp';
import ReviewList3 from './components/FundingPage/comments/ReviewList3';
import { AuthProvider } from './components/api/AuthContext';

import SponsorPage from './components/GuidePage/Pages/SponsorPage';
import CreatorPage from './components/GuidePage/Pages/CreatorPage';
import GuidePopup from './components/MainPage/GuidePopup';  // GuidePopup을 import

function App() {
  // 팝업 표시 상태를 관리하는 state
  const [isGuidePopupVisible, setGuidePopupVisible] = useState(false);

  return (
    <AuthProvider>
      <Router> {/* HashRouter로 변경 */}
        <AppContent
          isGuidePopupVisible={isGuidePopupVisible}
          setGuidePopupVisible={setGuidePopupVisible}
        />
      </Router>
    </AuthProvider>
  );
}

function AppContent({
  isGuidePopupVisible,
  setGuidePopupVisible,
}) {
  const location = useLocation(); // 현재 경로를 확인하기 위한 훅

  useEffect(() => {
    if (
      location.pathname === '/' ||
      location.pathname === '/sponsor' ||
      location.pathname === '/creator'
    ) {
      setGuidePopupVisible(true);
    } else {
      setGuidePopupVisible(false);
    }
  }, [location]); // location이 변경될 때마다 실행

  const closeGuidePopup = () => {
    setGuidePopupVisible(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPageApp />} />
        <Route path="/funding/" element={<FundingPageApp />} /> {/* 코난 */}
        <Route path="/funding2/" element={<FundingPage2App />} /> {/* 싱크볼 */}
        <Route path="/funding3/" element={<FundingPage3App />} /> {/* CD플레이어 */}

        <Route path="/sponsor" element={<SponsorPage />} /> {/* 후원자 페이지 */}
        <Route path="/creator" element={<CreatorPage />} /> {/* 창작자 페이지 */}

        <Route path="/" element={<SalesPage gubun={1} />} />

        <Route path="comments" element={<CommentsPrjt gubun={1} />} /> {/* 코난 */}
        <Route path="comments2" element={<CommentsPrjt2 gubun={2} />} /> {/* 싱크볼 */}
        <Route path="comments3" element={<CommentsPrjt3 gubun={3} />} /> {/* CD플레이어 */}

        <Route path="Mypage" element={<MyPage gubun={1} />} />

        <Route path="reviews" element={<ReviewList gubun={1} />} /> {/* 코난 */}
        <Route path="reviews2" element={<ReviewList2 gubun={2} />} /> {/* 싱크볼 */}
        <Route path="reviews3" element={<ReviewList3 gubun={3} />} /> {/* CD플레이어 */}
        
        <Route path="/login/" element={<LoginJs />} /> {/* 로그인 페이지 */}
        <Route path="/SignUp/" element={<SignUpJs />} /> {/* 회원가입 페이지 */}
      </Routes>

      {/* 특정 페이지에 있을 때만 가이드 팝업 표시 */}
      {isGuidePopupVisible && <GuidePopup onClose={closeGuidePopup} />}
    </>
  );
}

export default App;

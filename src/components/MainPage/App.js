import React, { useEffect, useContext } from 'react'; // React 라이브러리를 임포트합니다.
import Logobutton from './Logobutton'; // Logobutton 컴포넌트를 임포트합니다.
import Category from './Category';
// import Banner from './Banner';
import ProjectImage from './ProjectImage';
import Guide from './Guide';
import Interests from './Interests';
import './Main.css'; // Main.css 파일을 임포트합니다.
import { AuthProvider, AuthContext } from '../api/AuthContext';


const App = () => { // App 컴포넌트를 정의합니다.

  const { setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    // 페이지 로드 시 로그인 상태 확인
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (storedIsLoggedIn) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);


  return ( // JSX를 반환합니다.
    <AuthProvider>
      <div className="app-container"> {/* 앱의 최상위 컨테이너 div에 클래스명을 할당합니다. */}
        <Logobutton /> {/* Logobutton 컴포넌트를 포함합니다. */}
        <Category />
        <ProjectImage />
        <Interests />
        <Guide />
      </div>
    </AuthProvider>
  );
};

export default App; // App 컴포넌트를 기본으로 내보냅니다.
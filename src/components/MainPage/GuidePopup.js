import React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';  // Draggable 컴포넌트 import
import { useLocation } from 'react-router-dom';  // 현재 경로 확인을 위한 훅

const GuidePopup = ({ onClose }) => {
  const location = useLocation();  // 현재 경로를 가져옴

  // 페이지별로 팝업의 위치를 다르게 설정
  let popupPosition = {
    top: '40%',  // 기본 위치
    left: '35%',
    transform: 'translateX(-50%)'
  };

  if (location.pathname === '/sponsor') {
    popupPosition = {
      top: '100px',  // 후원자 페이지에서의 위치
      left: '34.1%',  // 오른쪽으로 치우침
      transform: 'translateX(-50%)'
    };
  } else if (location.pathname === '/creator') {
    popupPosition = {
      top: '100px',  // 창작자 페이지에서의 위치
      left: '34.1%',  // 오른쪽으로 치우침
      transform: 'translateX(-50%)'
    };
  }

  // 후원자 가이드 페이지로 이동하는 함수
  const handleNavigateSponsor = () => {
    window.open('https://ys2ys2.github.io/JavachipPrjt_01/#/sponsor', '_blank');  // 후원자 페이지를 새 창에서 열기
  };

  // 창작자 가이드 페이지로 이동하는 함수
  const handleNavigateCreator = () => {
    window.open('https://ys2ys2.github.io/JavachipPrjt_01/#/creator', '_blank');  // 창작자 페이지를 새 창에서 열기
  };

  return (
    <Draggable>
      <PopupContainer style={popupPosition}>
        <PopupContent>
          <CloseButton onClick={onClose}>X</CloseButton>
          <IconWrapper>
            <WarningIcon>펀딩할래!</WarningIcon>
          </IconWrapper>
          <TextWrapper>
            <p>가이드 바로가기</p>
          </TextWrapper>
          <ButtonWrapper>
            <NavigateButton onClick={handleNavigateSponsor} sponsor>
              후원자 가이드
            </NavigateButton>
            <NavigateButton onClick={handleNavigateCreator} creator>
              창작자 가이드
            </NavigateButton>
          </ButtonWrapper>
        </PopupContent>
      </PopupContainer>
    </Draggable>
  );
};

export default GuidePopup;

// 팝업의 전체 컨테이너 설정
const PopupContainer = styled.div`
  position: fixed;  // 화면에 고정된 위치에 표시
  z-index: 1000;  // 다른 요소들 위에 표시
  cursor: move;  // 드래그 가능하도록 마우스 커서 변경
`;

const PopupContent = styled.div`
  background-color: #ffffff;
  width: 370px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  opacity: 0.7;  // 초기 투명도 설정
  transition: opacity 0.3s ease-in-out;  // 호버 시 투명도 변화 애니메이션

  &:hover {
    opacity: 1;  // 호버 시 완전 불투명으로 변경
  }
`;

const IconWrapper = styled.div`
  background-color: #FFB85A;
  padding: 15px;
  border-radius: 10px 10px 0 0;
  margin: -20px -20px 20px -20px;
  height: 30px;
`;

const WarningIcon = styled.div`
  color: white;
  font-size: 35px;
  font-weight: bold;
`;

const TextWrapper = styled.div`
  color: #000000;
  
  h2 {
    font-weight: 800;
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  p {
    margin: 5px 0;
    font-size: 16px;
  }
`;

const CloseButton = styled.button`
  position: absolute;  // 절대 위치
  top: 10px;  // 상단에서 10px
  right: 10px;  // 우측에서 10px
  background: none;  // 배경 없음
  border: none;  // 테두리 없음
  font-size: 18px;  // 글자 크기
  cursor: pointer;  // 마우스 커서 변경
  color: #000000;  // 글자 색상 검은색
`;

const ButtonWrapper = styled.div`
  display: flex;  // 플렉스박스로 버튼들을 배치
  justify-content: space-around;  // 버튼들을 좌우로 나란히 배치
  margin-top: 20px;  // 상단 여백
`;

const NavigateButton = styled.button`
  padding: 10px 30px;  // 내부 여백 (상하, 좌우)
  background-color: ${props => (props.creator ? '#171FBF' : '#F2620F')};  // 버튼 색상 다르게 적용
  color: white;  // 글자 색상 흰색
  border: none;  // 테두리 없음
  border-radius: 15px;  // 버튼 모서리를 둥글게
  cursor: pointer;  // 마우스 커서 변경
  margin: 10px;  // 외부 여백
  font-size: 16px;  // 글자 크기
  font-weight: 900;  // 굵은 글씨체

  &:hover {
    background-color: ${props => (props.creator ? '#5962F6' : '#FFB85A')};  // 마우스 오버 시 배경색 변경
  }
`;
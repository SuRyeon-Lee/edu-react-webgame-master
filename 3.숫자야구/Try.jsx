import React, { memo } from 'react';
/*
  🗒 memo
  
  -사용법: memo로 함수컴포넌트 전체를 감싸준다.

  -효과: 
    부모 컴포넌트가 리랜더링 됐을 때, 자식 컴포넌트가 리랜더링 되는 것을 막아줌
    대신! state나 props가 바뀌었을 때는 여전히 잘 리랜더링됨
 
  아래와 같이 바꿔주면 input창 입력시
  부모 컴포넌트의 영역만 리랜더링되고
  자식 컴포넌트의 영역인 세부 리스트 한줄한줄은 리랜더링 안된다.

  -추가:
  메모를 적용하면 데브툴에서 확인해볼때 컴포넌트 이름이 이상하게 바뀐걸 확인할 수 있다.
  이럴땐, displayName을 사용
*/ 

const Try = memo(({tryInfo}) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});
//📌 memo로 인해 컴포넌트 이름 이상하게 바뀌는거 원상태로 돌리기
Try.displayName = 'Try'

export default Try;

//1. 환영 메시지 생성

// 회원 등급과 이름을 입력받아 맞춤형 환영 메시지를 출력하는 함수를 작성합니다.

// - VIP 회원 : "🌟 VIP {이름}님, 특별한 혜택이 준비되어 있습니다!"
// - 일반 회원 : "안녕하세요, {이름}님! 즐거운 쇼핑 되세요."
// - 함수이름	환영메시지생성
// - 기능 :	회원 등급에 따라 다른 환영 메시지를 문자열로 반환
// - 매개변수	: 회원이름, 회원등급
// - 반환값 타입	: String
// - 비고 :	함수 선언으로 작성
// - 난이도 :	⭐

function welcomeMessage(memberName, memberGrade){
   const membership = {
    'vip' : '🌟 VIP ' + memberName + '님, 특별한 혜택이 준비되어 있습니다!',
    'VIP' : '🌟 VIP ' + memberName + '님, 특별한 혜택이 준비되어 있습니다!'
   }
  // 객체 리터럴 매핑 : 객체의 값을 대조하여 결과값을 출력 || 대조되는 값이 없으면 출력할 기본 값 설정 
  return membership[memberGrade] || '안녕하세요, ' + memberName + '님! 즐거운 쇼핑 되세요.'
}

//1. welcomeMessage() 테스트 코드
console.log(welcomeMessage('홍길동', 'gold')) // '안녕하세요, 홍길동님! 즐거운 쇼핑 되세요.'
console.log(welcomeMessage('김철수', 'vip')) // '🌟 VIP 김철수님, 특별한 혜택이 준비되어 있습니다!

// ------------------------------------------------------------------------------------------------------------------------------------------

// 2. 배송비 계산

// 주문 금액과 배송 지역을 입력받아 배송비를 계산하는 함수를 작성합니다.

//배송비 정책
// - 주문 금액이 50,000원 이상 : 무료 배송 
// - 제주/도서 지역 : 추가 배송비 3,000원
// - 배송지역 값 예시 : "서울", "부산", "제주", "도서"
// - 일반 지역 : 기본 배송비 3,000원
// - 주문 금액이 0원 이하인 경우 : 0 반환
// - 배송지역이 빈 문자열인 경우 : 기본 배송비 적용

// 함수이름:	배송비계산
// 기능 :	주문 금액과 지역에 따라 배송비를 계산하여 반환
// 매개변수 :	주문금액, 배송지역
// 반환값 타입 :	Number
// 비고 :	함수 표현식으로 작성
// 난이도 :	⭐⭐

const calculateDeliveryFee = function(orderAmount, deliveryArea){
  const BASIC_DELIVERY_FEE = 3000

  const addDeliveryFeeArea ={
    '제주' : 3000,
    '도서' : 3000
  } 
  const additionalDeliveryFee = addDeliveryFeeArea[deliveryArea] || 0
  const FREE_SHIPPING_TERMS = (parseInt(orderAmount) < 50000) 
  const minimumOrderAmount = (parseInt(orderAmount) > 0)

  const deliveryFee = (BASIC_DELIVERY_FEE + additionalDeliveryFee) * Number(FREE_SHIPPING_TERMS) * Number(minimumOrderAmount)

  return Number(deliveryFee) 
}
console.log(calculateDeliveryFee('49999원', '서울')) // 3000
console.log(calculateDeliveryFee('49999원', '제주')) // 6000
console.log(calculateDeliveryFee('67000원', '도서')) // 0


// ------------------------------------------------------------------------------------------------------------------------------------------### 3. 비밀번호 유효성 검사

// 비밀번호 문자열을 입력받아 유효성 검사를 수행하는 함수를 작성합니다.

//  비밀번호 규칙 
// - 최소 8자 이상
// - 최대 20자 이하
// - 위 조건을 모두 만족하면 true, 아니면 false 반환

// 함수이름	: 비밀번호유효성검사
// 기능 :	비밀번호가 규칙을 만족하는지 검사하여 불리언 값으로 반환
// 매개변수	: 비밀번호
// 반환값 타입 : Boolean
// 비고 :	화살표 함수 표현식으로 작성
// 난이도 :	⭐

const passwordValidation = (password) => {
  // 빈 문자열일 때에도 유효성 검사에서 false 를 반환하기 위한 코드
  const isValidInput = Boolean(password)
  const lengthOfPassword = String(password).length

  let confirmPasswordRule = isValidInput && (lengthOfPassword >= 8) && (lengthOfPassword <= 20)

  return Boolean(confirmPasswordRule)

}
console.log(passwordValidation('1234567aabc'))
console.log(passwordValidation(12345))
console.log(passwordValidation(123456789123456789123))



// ------------------------------------------------------------------------------------------------------------------------------------------
// 4. 포인트 적립 계산

// 결제 금액과 회원 등급을 입력받아 적립될 포인트를 계산하는 함수를 작성합니다.

// > 포인트 적립률 
// - VIP : 결제 금액의 5%
// - GOLD : 결제 금액의 3%
// - SILVER : 결제 금액의 1%
// - 일반 : 결제 금액의 0.5% 
// [예] VIP 회원이 100,000원 결제 시 → 5,000 포인트 적립

// 함수이름	: 포인트적립계산
// 기능	: 회원 등급에 따라 적립 포인트를 계산하여 반환 (소수점 버림)
// 매개변수	: 결제금액, 회원등급
// 반환값 타입 : Number
// 비고	: 함수 선언으로 작성
// 난이도 :	⭐⭐

function calculateAccumulatedPoint(paymentAmount, membershipLevel){
  const accumulateRate={
    'VIP' : 0.05,
    'GOLD' : 0.03,
    'SILVER' : 0.01,
    '일반' : 0.005
}
  const accumulatedPoint = parseInt(paymentAmount,10) * accumulateRate[membershipLevel]
  
  // 테스트 코드 
  // console.log('결제 금액 : ' + paymentAmount + '원, ' + '회원등급 : ' + membershipLevel + ", 적립금 : " + parseInt(accumulatedPoint,10) + '원')
  // console.log(typeof(accumulatedPoint)) 

  return Number(accumulatedPoint)
  
}
console.log(calculateAccumulatedPoint(100000, 'VIP'))
console.log(calculateAccumulatedPoint(100000, 'GOLD'))

// ------------------------------------------------------------------------------------------------------------------------------------------
// 5. 영화 티켓 가격 계산

// 영화 정보와 관람 인원을 입력받아 총 결제 금액을 계산하는 함수를 작성합니다.

// 요금 정책 
// - 일반 영화: 14,000원
// - 3D 영화: 17,000원
// - IMAX 영화: 20,000원
// - 조조 할인(10시 이전 상영): 20% 할인
// - 영화타입 값 : "일반", "3D", "IMAX"
// - 조조할인여부 값 : true 또는 false 
// [예] 3D 영화, 조조 상영, 2명 관람 → 27,200원 결제

// 함수이름	: 영화티켓가격계산
// 기능	: 영화 타입, 조조 여부, 인원수를 고려하여 총 금액 계산
// 매개변수 :	영화타입, 조조할인여부, 관람인원
// 반환값 타입 : Number
// 비고	: 함수 표현식으로 작성
// 난이도	: ⭐⭐⭐

const calculateTicketPrice = (movieType,isEarlyDiscount,numberOfviewer) => {
  const ticketPrice = {
    '일반' : 14000,
    '3D' : 17000,
    'IMAX' : 20000
  } 
  const earlyDiscountRate = {
    true : 0.2,
    false : 0
  }
  const earlyDiscountAmount = ticketPrice[movieType] * earlyDiscountRate[isEarlyDiscount]


  return Number((ticketPrice[movieType] - earlyDiscountAmount) * numberOfviewer)

}
console.log(calculateTicketPrice('3D', false, 2))
console.log(calculateTicketPrice('IMAX',true, 2))

// ------------------------------------------------------------------------------------------------------------------------------------------

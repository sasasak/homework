
// tab-nav__button--active : 탭 버튼 활성화중일때 
// tab-panel--active : 패널 활성화상태일때
// 버튼을 누르면 다른 화면으로 전환되어야 함 -> display : none 상태에서 active를 만나면 block 이 되면서 보이게됨 
// 이벤트 리스너 -> 버튼 클릭 -> active 클래스 추가 
// 반복문 조건 
// 버튼을 눌렀을 때 해당 버튼에 active 클래스를 추가하면 됨. 
// 모든 버튼 요소를 받아온다
// 버튼 중에 클릭된 요소가 있을때 active 클래스를 추가한다
// active 클래스가 원래 있던 요소가 있기 때문에 원래 있던 active 클래스를 제거하고 추가해야한다. 
// 버튼이 active 상태가 되면 panel도 active 상태로 변경되어야한다. 
// 클래스 이름으로는 상태를 변경할 수 없는데.. 어떻게 해야할까
// 버튼을 클릭했을 때 클릭된 버튼의 data-target을 불러와서 해당 버튼에 클래스를 추가해주면 된다!


const tabNavButton = document.querySelectorAll('.tab-nav__button')
const tabNavPanel = document.querySelectorAll('.tab-panel')

tabNavButton.forEach((selectedButton) => {
  selectedButton.addEventListener('click', () => {

    tabNavButton.forEach(button => 
      { button.classList.remove('tab-nav__button--active')
        button.setAttribute('aria-selected', 'false')
    })
    tabNavPanel.forEach(panel => panel.classList.remove('tab-panel--active'))

    selectedButton.classList.add('tab-nav__button--active');
    selectedButton.setAttribute('aria-selected','true')

    const targetName = selectedButton.dataset.target 
    const selectedPanel = document.getElementById(targetName) 
  
      if(selectedPanel){selectedPanel.classList.add('tab-panel--active')}    
  })
})

// data-* 속성을 불러오는 법 : .dataset 객체를 통해 접근할 수 있다. 
// data-이름 은 .dataset.이름으로 매칭할 수 있다. 
// aria-selected 도 변경하고 싶으면 어떻게 하는게 좋을까? 
// setAttribute 메서드를 사용 

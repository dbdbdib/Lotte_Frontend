window.onload = function() {
  // 변수 선언 및 초기화
  const modal = document.querySelector('#modal');
  const btnModify = document.querySelector('#btn-modify')
  const btnClose = document.querySelector('#btn-close');

  // 모달 활성화
  function modalOpen() {
    modal.classList.add('active');
  };

  // 모달 닫기
  function modalClose() {
    modal.classList.remove('active');
  };

  btnModify.addEventListener("click", modalOpen);
  btnClose.addEventListener("click", modalClose);
}
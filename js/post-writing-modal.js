window.onload = function() {
  // 변수 선언 및 초기화
  const modal = document.querySelector('#modal');
  const btnCreate = document.querySelector('#btn-create')
  const btnClose = document.querySelector('#btn-close');

  // 모달 활성화
  function modalOpen() {
    modal.classList.add('active');
  };

  // 모달 닫기
  function modalClose() {
    modal.classList.remove('active');
  };

  btnCreate.addEventListener("click", modalOpen);
  btnClose.addEventListener("click", modalClose);
}
window.onload = function() {
  // 변수 선언 및 초기화
  const lotteStaffImg = document.querySelector('#lotte-staff-img');
  const lotteStaffBtn = document.querySelector('#btn-lotte-staff');
  const jobSeekerImg = document.querySelector('#jobseeker-img');
  const jobSeekerBtn = document.querySelector('#btn-jobseeker');

  // 롯데 직원 선택
  function clickLotteStaff() {
    lotteStaffImg.style.opacity = 1;
    lotteStaffBtn.style.border = '4px solid #000000';
    lotteStaffBtn.style.color = '#000000'

    jobSeekerImg.style.opacity = 0.5;
    jobSeekerBtn.style.border = '1px solid #707070'
    jobSeekerBtn.style.color = '#707070'
  };

  // 취준생 선택
  function clickJobseeker() {
    jobSeekerImg.style.opacity = 1;
    jobSeekerBtn.style.border = '4px solid #000000';
    jobSeekerBtn.style.color = '#000000'

    lotteStaffImg.style.opacity = 0.5;
    lotteStaffBtn.style.border = '1px solid #707070'
    lotteStaffBtn.style.color = '#707070'
  };

  lotteStaffBtn.addEventListener("click", clickLotteStaff);
  jobSeekerBtn.addEventListener("click", clickJobseeker);
}
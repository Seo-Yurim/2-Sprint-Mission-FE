const inputEmail = document.querySelector('#useremail');
const inputPassword = document.querySelector('#password');
const noneEmail = document.querySelector('.none-email-value');
const nonePassword = document.querySelector('.none-password-value');
const formatErrorEmail = document.querySelector('.email-format-error');
const formatErrorPassword = document.querySelector('.password-format-error');

const errorModal = document.querySelector('.error-modal');
const errorOkBtn = document.querySelector('.error-ok');
const errorOverlay = document.querySelector('.modal-overlay');

const hidePasswordIcon = document.querySelector('.password-hide');
const showPasswordIcon = document.querySelector('.password-show');

const USER_DATA = [
  { email: 'codeit1@codeit.com', password: 'codeit101!' },
  { email: 'codeit2@codeit.com', password: 'codeit202!' },
  { email: 'codeit3@codeit.com', password: 'codeit303!' },
  { email: 'codeit4@codeit.com', password: 'codeit404!' },
  { email: 'codeit5@codeit.com', password: 'codeit505!' },
  { email: 'codeit6@codeit.com', password: 'codeit606!' }
];

// 이메일 형식 지정
const emailFormat =
  /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

// 이메일 유효성 검증 함수
function isEmailValid(email) {
  if (email !== '') {
    noneEmail.classList.add('hide');
    inputEmail.classList.remove('error');
    formatErrorEmail.classList.add('hide');

    if (!emailFormat.test(email)) {
      formatErrorEmail.classList.remove('hide');
      inputEmail.classList.add('error');
      noneEmail.classList.add('hide');
    }
  } else {
    noneEmail.classList.remove('hide');
    inputEmail.classList.add('error');
    formatErrorEmail.classList.add('hide');
  }
}

// 비밀번호 유효성 검증 함수
function isPasswordValid(password) {
  if (password !== '') {
    nonePassword.classList.add('hide');
    inputPassword.classList.remove('error');
    formatErrorPassword.classList.add('hide');

    if (password.length < 8) {
      formatErrorPassword.classList.remove('hide');
      inputPassword.classList.add('error');
      nonePassword.classList.add('hide');
    }
  } else {
    nonePassword.classList.remove('hide');
    inputPassword.classList.add('error');
    formatErrorPassword.classList.add('hide');
  }
}

// 비밀번호 표시 함수
function showPassword(password) {
  if (password.type === 'password') {
    password.type = 'text';
    showPasswordIcon.classList.remove('hide');
    hidePasswordIcon.classList.add('hide');
  }
}

// 비밀번호 숨기기 함수
function hidePassword(password) {
  if (password.type === 'text') {
    password.type = 'password';
    hidePasswordIcon.classList.remove('hide');
    showPasswordIcon.classList.add('hide');
  }
}

// 모달 닫는 함수
function closeModal() {
  errorModal.classList.add('hide');
}

// 이메일, 비밀번호 유효성 검증 이벤트 생성
inputEmail.addEventListener('focusout', () => isEmailValid(inputEmail.value));
inputPassword.addEventListener('focusout', () =>
  isPasswordValid(inputPassword.value)
);

// 비밀번호 표시/숨기기 설정
hidePasswordIcon.addEventListener('click', () => showPassword(inputPassword));
showPasswordIcon.addEventListener('click', () => hidePassword(inputPassword));

// 모달 닫기 이벤트 생성
errorOverlay.addEventListener('click', closeModal);
errorOkBtn.addEventListener('click', closeModal);

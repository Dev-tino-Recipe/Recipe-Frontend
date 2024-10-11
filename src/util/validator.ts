export const lengthCheck = (value: string, min: number, max: number) => {
  return value.length >= min && value.length <= max;
};

export const validateId = (id: string) => {
  if (id.length === 0) {
    return "아이디는 필수입니다.";
  }

  if (id.length < 4 || id.length > 12) {
    return "아이디는 4~12자리를 적어주세요.";
  }

  return "";
}

export const validatePw = (pw: string) => {
  if (pw.length === 0) {
    return "비밀번호는 필수입니다.";
  }

  if (pw.length < 8 || pw.length > 15) {
    return "비밀번호는 8~15자리를 적어주세요.";
  }

  return "";
}

export const validatePwc = (pw: string, pwc: string) => {
  if (pw !== pwc) {
    return "비밀번호가 일치하지 않습니다.";
  }

  return "";
}
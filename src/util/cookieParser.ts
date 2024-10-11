// Set-Cookie 헤더를 파싱하는 함수
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export function parseSetCookie(setCookieString: string) {
  // 쿠키 문자열을 세미콜론으로 분리
  const parts = setCookieString.split(";").map((part) => part.trim());

  // 이름과 값 추출
  const [nameValuePair, ...attributePairs] = parts;
  const [name, value] = nameValuePair.split("=");

  // 옵션 객체 생성
  const options: ResponseCookie = {
    name,
    value,
  };

  // 추가 속성 처리
  attributePairs.forEach((attribute) => {
    const [attrName, attrValue] = attribute.split("=");
    switch (attrName.toLowerCase()) {
      case "path":
        options.path = attrValue || "/";
        break;
      case "expires":
        options.expires = new Date(attrValue);
        break;
      case "max-age":
        options.maxAge = parseInt(attrValue, 10);
        break;
      case "domain":
        options.domain = attrValue;
        break;
      case "secure":
        options.secure = true;
        break;
      case "httponly":
        options.httpOnly = true;
        break;
      case "samesite":
        options.sameSite =
          attrValue.toLowerCase() as ResponseCookie["sameSite"];
        break;
      default:
        // 기타 속성 처리
        break;
    }
  });

  return options;
}

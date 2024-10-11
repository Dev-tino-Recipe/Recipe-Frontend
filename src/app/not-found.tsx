import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full flex flex-col gap-4 justify-center items-center">
      <h1 className="text-5xl font-bold">404</h1>
      <h2 className="text-3xl font-bold">페이지가 존재 하지 않습니다.</h2>
      <Link href="/" replace={true}>
        홈으로 돌아가기
      </Link>
    </div>
  );
}

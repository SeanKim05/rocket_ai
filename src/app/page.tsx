import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Image src="/images/saju_intro.png" alt="a" width="100" height="500" />
      <p className="text-seokbong-r">기본 본문 텍스트</p>

      <p className="text-seokbong-b">한석봉 Regular</p>

      <p className="text-seokbong-buble">한석봉 Bold</p>
    </div>
  );
}

// 448

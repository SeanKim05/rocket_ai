import ImageFramer from "@/components/ImageFrame";

export default function Home() {
  return (
    <div className="w-screen max-w-112">
      <ImageFramer
        width={375}
        height={652}
        alt="인트로 이미지"
        src="/images/saju_intro.png"
      />

      <ImageFramer
        width={375}
        height={285}
        src="/images/brush.png"
        className="bg-red-50"
      />

      <ImageFramer
        width={375}
        height={306}
        src="/images/saju_result.png"
        className="bg-red-50"
      />
    </div>
  );
}

// 448

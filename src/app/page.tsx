import ImageFramer from "@/components/ImageFrame";
import GradientOverlay from "@/components/atoms/GradientOverlay";
import MotionWrapper from "@/components/atoms/MotionWrapper";

export default function Home() {
  return (
    <div className="w-screen max-w-112 bg-main-beige">
      <div className="relative">
        <ImageFramer
          width={375}
          height={652}
          alt="인트로 이미지"
          src="/images/saju_intro.png"
        />
        <GradientOverlay />
      </div>

      <MotionWrapper className="mt-30 mb-10 mr-6">
        <ImageFramer width={375} height={285} src="/images/brush.png" />
      </MotionWrapper>

      <MotionWrapper>
        <ImageFramer width={375} height={306} src="/images/saju_result.png" />
      </MotionWrapper>
    </div>
  );
}

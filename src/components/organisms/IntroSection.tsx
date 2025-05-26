import ImageFrame from "@/components/atoms/slides/ImageFrame";
import GradientOverlay from "@/components/atoms/slides/GradientOverlay";

export default function IntroSection() {
  return (
    <div className="relative">
      <ImageFrame
        width={375}
        height={652}
        alt="인트로 이미지"
        src="/images/saju_intro.png"
      />
      <GradientOverlay />
    </div>
  );
}

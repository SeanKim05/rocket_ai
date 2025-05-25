import ImageFramer from "@/components/ImageFrame";
import GradientOverlay from "@/components/atoms/GradientOverlay";
import MotionWrapper from "@/components/atoms/MotionWrapper";
import SpeechBubble from "@/components/SpeechBubble";

export default function Home() {
  return (
    <div className="bg-main-beige w-screen max-w-112">
      <div className="relative">
        <ImageFramer
          width={375}
          height={652}
          alt="인트로 이미지"
          src="/images/saju_intro.png"
        />
        <GradientOverlay />
      </div>

      <MotionWrapper className="relative mt-30 mr-6 mb-10">
        <ImageFramer width={375} height={285} src="/images/brush.png" />
        <SpeechBubble
          text={`이제 본격적으로 \nOO님의 사주팔자를 \n분석해볼 차례네요.`}
          imageSrc="/images/bubble_b.png"
          top={-200}
          left={6}
          tailPosition="bottom"
        />
      </MotionWrapper>

      <MotionWrapper>
        <div className="relative">
          <ImageFramer
            width={375}
            height={306}
            src="/images/saju_result.png"
            className="relative"
          />
          <SpeechBubble
            text={`제가 oo님의 사주를 \n보기 쉽게 표로 정리했어요`}
            imageSrc="/images/bubble_t.png"
            top={-108}
            left={6}
            tailPosition="top"
          />
        </div>
      </MotionWrapper>
    </div>
  );
}

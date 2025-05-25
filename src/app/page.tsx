import ImageFramer from "@/components/atoms/slides/ImageFrame";
import GradientOverlay from "@/components/atoms/slides/GradientOverlay";
import MotionWrapper from "@/components/atoms/slides/MotionWrapper";
import SpeechBubble from "@/components/atoms/slides/SpeechBubble";
import SajuTable from "@/components/SajuTable";
import ImageSlide from "@/components/molcules/slides/ImageSlide";

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

      <MotionWrapper id="motion-1" className="relative mt-30 mr-6 mb-10">
        <ImageSlide
          resultImgSrc="/images/brush.png"
          bubbleText={`이제 본격적으로 \nOO님의 사주팔자를 \n분석해볼 차례네요.`}
          bubbleImgSrc="/images/bubble_b.png"
          bubbleTop={-200}
          bubbleLeft={6}
          tailPosition="bottom"
          inViewId="motion-1"
        />
      </MotionWrapper>

      <MotionWrapper id="motion-2" threshold={0.1}>
        <div className="relative">
          <div className="relative">
            <ImageFramer
              width={375}
              height={306}
              src="/images/saju_result.png"
              // className="relative"
            />
            <GradientOverlay />
          </div>
          <SpeechBubble
            text={`제가 oo님의 사주를 \n보기 쉽게 표로 정리했어요`}
            imageSrc="/images/bubble_t.png"
            top={-108}
            left={6}
            tailPosition="top"
            inViewId="motion-2"
          />
          <div className="relative top-[-50px] bottom-0 px-2 pt-6 pb-18">
            <SajuTable inViewId="motion-2" />
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
}

import MotionWrapper from "@/components/atoms/slides/MotionWrapper";
import ImageSlide from "@/components/molcules/slides/ImageSlide";
import GradientOverlay from "@/components/atoms/slides/GradientOverlay";
import SajuTable from "@/components/molcules/table/SajuTable";

export default function SajuResultSection() {
  return (
    <MotionWrapper id="motion-2" threshold={0.1}>
      <div className="relative">
        <ImageSlide
          resultImgSrc="/images/saju_result.png"
          bubbleText={`제가 oo님의 사주를 \n보기 쉽게 표로 정리했어요`}
          bubbleImgSrc="/images/bubble_t.png"
          bubbleTop={-108}
          bubbleLeft={6}
          tailPosition="top"
          inViewId="motion-2"
        />
        <GradientOverlay />
      </div>
      <div className="relative top-[-50px] bottom-0 px-2 pt-6 pb-18">
        <SajuTable inViewId="motion-2" />
      </div>
    </MotionWrapper>
  );
}

import MotionWrapper from "@/components/atoms/slides/MotionWrapper";
import ImageSlide from "@/components/molcules/slides/ImageSlide";

export default function MotionSection() {
  return (
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
  );
}

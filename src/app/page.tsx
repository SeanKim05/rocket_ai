import IntroSection from "@/components/organisms/IntroSection";
import MotionSection from "@/components/organisms/MotionSection";
import SajuResultSection from "@/components/organisms/SajuResultSection";

export default function Home() {
  return (
    <div className="bg-main-beige w-screen max-w-112">
      <IntroSection />
      <MotionSection />
      <SajuResultSection />
    </div>
  );
}

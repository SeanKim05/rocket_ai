import React from "react";
import ImageFramer from "@/components/atoms/slides/ImageFrame";
import SpeechBubble from "@/components/atoms/slides/SpeechBubble";

interface ResultBubbleProps {
  resultImgSrc: string;
  bubbleText: string;
  bubbleImgSrc: string;
  bubbleTop?: number;
  bubbleLeft?: number;
  tailPosition?: "top" | "bottom";
  imgWidth?: number;
  imgHeight?: number;
  imgClassName?: string;
  inViewId?: string;
}

export default function ImageSlide({
  resultImgSrc,
  bubbleText,
  bubbleImgSrc,
  bubbleTop = -108,
  bubbleLeft = 6,
  tailPosition = "top",
  imgWidth = 375,
  imgHeight = 306,
  imgClassName = "relative",
  inViewId,
}: ResultBubbleProps) {
  return (
    <>
      <ImageFramer
        width={imgWidth}
        height={imgHeight}
        src={resultImgSrc}
        className={imgClassName}
      />
      <SpeechBubble
        text={bubbleText}
        imageSrc={bubbleImgSrc}
        top={bubbleTop}
        left={bubbleLeft}
        tailPosition={tailPosition}
        inViewId={inViewId}
      />
    </>
  );
}

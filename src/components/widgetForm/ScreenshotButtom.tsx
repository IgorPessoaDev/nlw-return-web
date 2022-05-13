import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtomProps {
  screenshot: string | null;
  onScreenShotTook: (screenshot: string | null) => void;
}

export function ScreenshotButtom({ onScreenShotTook, screenshot }: ScreenshotButtomProps) {
  const [itTalkingScreenShot, setItTalkingScreenShot] = useState(false)

  async function handScreenShot() {
    setItTalkingScreenShot(true)

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    onScreenShotTook(base64image)

    setItTalkingScreenShot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={() => onScreenShotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "Right bottom",
          backgroundSize: 180,
        }}>
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"

      onClick={handScreenShot}
    >
      {itTalkingScreenShot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}
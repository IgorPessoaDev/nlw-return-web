import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../closeButton";
import { ScreenshotButtom } from "../ScreenshotButtom";
import { api } from '../../../lib/api'
import { Loading } from "../../Loading";

interface FeedbackContectProps {
  feedbackType: FeedbackType;
  onFeedbackrestartRequestd: () => void;
  onFeedbackset: () => void
}

export function FeedbackContectStep({ feedbackType, onFeedbackrestartRequestd, onFeedbackset }: FeedbackContectProps) {
  const [screenshot, setScreenShot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleComment(event: FormEvent) {
    event.preventDefault();

    try {
      setIsSendingFeedback(true);

      await api.post('/feedbacks', {
        type: feedbackType,
        commet: comment,
        screenshot: screenshot,
      })

    } catch (error) {
      console.log(error);

    }

    onFeedbackset();
  }

  return (
    <>
      <header>
        <button type="button" className="top-5 left-5 absolute text-zinc-100 hover:text-zinc-100" onClick={onFeedbackrestartRequestd}>
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />

          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form onSubmit={handleComment} className="wy-4 w-full">
        <textarea className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 my-4 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent "
          placeholder="Conte com detalhes..."
          onChange={event => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButtom
            screenshot={screenshot}
            onScreenShotTook={setScreenShot}
          />

          <button
            type="submit"
            disabled={comment.length === 0 || isSendingFeedback}
            className="p-2 bg-brand-500 rounded-md flex-1 flex justify-center items-center text-sm border-transparent hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500 ">
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>

  );
}
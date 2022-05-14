import { CloseButton } from "../closeButton";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbcakTypeStep";
import { FeedbackContectStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";
import { image } from "html2canvas/dist/types/css/types/image";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'imagem de um Inseto'
    }
  },
  IDEA: {
    title: 'Ideias',
    image: {
      source: ideaImageUrl,
      alt: 'imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Other',
    image: {
      source: thoughtImageUrl,
      alt: 'imagem de um balão de pensamento'
    }
  }
};

export type FeedbackType = keyof typeof feedbackTypes;


export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [sucessfeedback, setfeedbackSent] = useState(false)


  function handRestartFeedback() {
    setFeedbackType(null)
    setfeedbackSent(false)
  }

  return (
    <div className="bg-zinc-900 p-4 relative mb-4 flex flex-col items-center shadow-lg rounded-2xl w-[calc(100vw-2rem)] md:w-auto">

      {sucessfeedback ? <FeedbackSucessStep onFeedbackrestartRequestd={handRestartFeedback} /> :
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContectStep feedbackType={feedbackType}
              onFeedbackrestartRequestd={handRestartFeedback}
              onFeedbackset={() => setfeedbackSent(true)} />
          )}
        </>}

      <footer className="text-xs text-neutral-400">
        <p>Feito com ♥ pelo <a href="https://www.instagram.com/_igor_pessoa" className="underline underline-offset-2">@_igor_pessoa</a></p>
      </footer>
    </div>
  )
}
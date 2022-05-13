import sucessImage from "../../../assets/success.svg";
import { CloseButton } from "../../closeButton";

interface FeedbackSucessStepProps {
  onFeedbackrestartRequestd: () => void
}
export function FeedbackSucessStep({ onFeedbackrestartRequestd }: FeedbackSucessStepProps) {

  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={sucessImage} alt="imagem de conclusão" />
        <span className="text-xl mt-2">Agradecemos pelo feedback</span>

        <button
          type="button"
          onClick={onFeedbackrestartRequestd}
          className="py-2 px-6 mt-6 rounded-md bg-zinc-800 border-transparent text-sm leading-6 hover:bg-zinc-700 focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none transition-colors">
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
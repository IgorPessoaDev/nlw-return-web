import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button className="absolute top-5 right-5" title="Fechar formulario de fedback">
      <X weight="bold" className="text-zinc-400 w-5 h-5 hover:text-zinc-100" />
    </Popover.Button>
  )
}
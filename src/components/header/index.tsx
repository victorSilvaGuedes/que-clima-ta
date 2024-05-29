import { Github, Search } from 'lucide-react'
import { Button } from '../ui/button'
import { Command, CommandGroup, CommandInput } from '../ui/command'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { ToggleThemeButton } from '../ui/toggle-theme-button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'

export function Header() {
  return (
    <header className="flex w-full py-4 items-center justify-between gap-2 flex-col md:flex-row">
      <div className="flex gap-2 items-center">
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <ToggleThemeButton />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm">Mudar tema (escuro/claro)</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <a
                href="https://github.com/victorSilvaGuedes/que-clima-ta"
                target="_blank"
              >
                <Button className="flex justify-center gap-2">
                  <Github size={20} />
                  Repositório
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm">Ir ao repositório no GitHub</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <h1 className="text-3xl font-semibold tracking-wide">que clima tá?</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={'outline'}
            className="flex justify-between gap-2 w-80 border"
          >
            <p>Pesquisar...</p> <Search size={20} />
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0">
          <Command>
            <CommandInput placeholder="Busque a cidade..." />
            <CommandGroup heading="Sugestões"></CommandGroup>
          </Command>
        </DialogContent>
      </Dialog>
    </header>
  )
}

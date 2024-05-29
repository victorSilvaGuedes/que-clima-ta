import { Github, Search } from 'lucide-react'
import { Button } from '../ui/button'
import { ToggleThemeButton } from '../ui/toggle-theme-button'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Command, CommandGroup, CommandInput } from '../ui/command'

export function Header() {
  return (
    <header className="flex w-full py-4 items-center justify-between gap-2 flex-col md:flex-row">
      <div className="flex gap-2 items-center">
        <ToggleThemeButton />

        <Button className="flex justify-center gap-2">
          <Github size={20} />
          Repositório
        </Button>
      </div>
      <h1 className="text-3xl font-semibold tracking-wide">que clima tá</h1>
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

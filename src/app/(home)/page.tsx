import { Temperature } from '@/components/temperature'

export default function Home() {
  return (
    <main>
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full min-w-72 md:w-[35rem]">
          <Temperature />
        </div>
        <div className="flex flex-col"></div>
      </div>
    </main>
  )
}

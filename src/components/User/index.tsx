import Image from 'next/image'

export function User() {
  return (
    <div className="flex items-center gap-3 px-2 py-2 bg-[#1c1c1f] rounded-md mb-4 cursor-pointer">
      <Image
        alt=""
        src="https://github.com/sanderpaniago.png"
        width={32}
        height={32}
        className="w-8 h-8 rounded-full"
      />

      <p className="text-sm">Bem Vindo Sander!</p>
    </div>
  )
}

import Image from "next/image"

export default function ProfileImage() {
  return (
    <div className="relative aspect-square overflow-hidden rounded-full border-4 border-primary">
      <Image
        src="/Profile-Picture.png"
        alt="Devanshi Tadvi"
        width={500}
        height={500}
        className="object-cover"
        priority
      />
    </div>
  )
}

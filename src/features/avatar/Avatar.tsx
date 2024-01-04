import Image from "next/image";
import myAvatar from "../../avatar.jpg";

export function Avatar() {
  return (
    <div className="w-[60%] aspect-square rounded-full bg-white outline outline-white outline-2 overflow-hidden">
      <Image
        className="rounded-full aspect-square object-cover"
        src={myAvatar}
        alt="avatar"
        width={150}
        height={150}
      />
    </div>
  );
}

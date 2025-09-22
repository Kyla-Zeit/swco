import Image from "next/image";
import logo from "@/public/logo.webp";

export function SiteLogo() {
  return (
    <Image
      src={logo}
      alt="Samawada"
      width={160}
      height={40}
      priority
      className="h-10 w-auto"
    />
  );
}

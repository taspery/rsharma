import Image from "next/image"

interface LogoProps {
  className?: string
  size?: number
}

interface LogoFullProps {
  className?: string
  height?: number
}

// Icon-only mark (used standalone if needed)
export function Logo({ className, size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="10" className="fill-primary" />
      <path
        d="M6 14h4l2-2h3"
        className="stroke-primary-foreground/20"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 36h3l2 2h4"
        className="stroke-primary-foreground/20"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="15" cy="12" r="1.5" className="fill-primary-foreground/25" />
      <circle cx="33" cy="36" r="1.5" className="fill-primary-foreground/25" />
      <path
        d="M12 36V13h6.5c1.8 0 3.2.5 4.2 1.5s1.5 2.3 1.5 3.8c0 1.3-.4 2.4-1.1 3.3-.7.9-1.7 1.5-2.9 1.7L26 24.5 21.5 36h-3.2l4.2-11h-4V36H12z"
        className="fill-primary-foreground"
      />
      <path
        d="M15.5 16v5.5h3c1 0 1.8-.3 2.3-.8.6-.5.9-1.3.9-2.2 0-.8-.3-1.5-.8-2-.5-.5-1.3-.8-2.3-.8h-3.1z"
        className="fill-primary"
      />
      <path
        d="M27 17.6c0-1.4.5-2.5 1.5-3.3 1-.8 2.3-1.3 3.8-1.3 1.4 0 2.5.3 3.4.9.9.6 1.4 1.5 1.6 2.5h-3c-.2-.4-.4-.7-.8-.9-.4-.2-.8-.3-1.3-.3-.6 0-1.2.2-1.6.5-.4.3-.6.7-.6 1.2 0 .4.2.8.6 1 .4.3 1.2.5 2.3.8 1.3.3 2.3.7 3 1.3.8.6 1.1 1.5 1.1 2.7 0 1.5-.5 2.6-1.5 3.4-1 .8-2.3 1.2-3.8 1.2-1.5 0-2.8-.4-3.7-1.1-1-.7-1.5-1.7-1.7-2.9h3.1c.1.5.4.9.9 1.2.5.3 1 .4 1.7.4.7 0 1.2-.2 1.6-.5.4-.3.6-.8.6-1.3 0-.5-.2-.9-.7-1.2-.4-.3-1.2-.5-2.3-.8-1.3-.3-2.2-.8-2.9-1.3-.6-.6-1-1.4-1-2.6z"
        className="fill-primary-foreground"
      />
      <path
        d="M36 38l1.5-3h-2l1.5-3"
        className="stroke-primary-foreground/40"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Full brand lockup: icon mark + "RS MAKES" wordmark
export function LogoFull({ className, height = 40 }: LogoFullProps) {
  const width = Math.round(height * (988 / 310))
  return (
    <Image
      src="/logo.webp"
      alt="RS Makes"
      width={width}
      height={height}
      className={className}
      priority
    />
  )
}

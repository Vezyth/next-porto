export default function Hero() {
  return (
    <header className="space-y-8 ">
      <div className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Intro
        </p>

        <div className="space-y-6 text-lg leading-8 text-zinc-300">
          <p>
            I'm an Information Systems graduate with professional experience
            building web applications using Laravel and MySQL. I also have
            experience developing mobile applications with Flutter and Kotlin,
            along with managing Linux-based infrastructure.
          </p>

          <p>
            Most recently, I designed and deployed a self-hosted server using
            Ubuntu, NGINX, Cloudflare Tunnel, PM2, and Git-based deployments.
            I enjoy building reliable software while continuously learning new
            technologies.
          </p>
        </div>
      </div>
    </header>
  );
}
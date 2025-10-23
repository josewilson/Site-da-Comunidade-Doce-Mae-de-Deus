export let bootstrapBundlePromise: Promise<unknown> | null = null

export function loadBootstrap() {
  if (!bootstrapBundlePromise) {
    bootstrapBundlePromise = import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }
  return bootstrapBundlePromise
}

export function loadBootstrapWhenIdle() {
  // Load after initial render/idle to keep TTI fast
  const idle = (cb: () => void) =>
    'requestIdleCallback' in window
      ? (window as any).requestIdleCallback(cb)
      : setTimeout(cb, 1200)

  idle(() => void loadBootstrap())
}


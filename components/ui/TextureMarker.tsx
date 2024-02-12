/** Abstract textured swatch that stands in for progress photos. */
export function TextureMarker({ variant }: { variant: 1 | 2 | 3 }) {
  return <i className={`tx tx${variant}`} aria-hidden="true" />;
}

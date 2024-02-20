import Image from "next/image";
import { ingredientNotes } from "@/lib/data/shelf";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IngredientNotes() {
  return (
    <section className="sec">
      <div className="wrap">
        <SectionHeading
          centered
          eyebrow="Ingredient notes"
          title={
            <>
              Labels, <em>translated</em>
            </>
          }
        />
        <div className="ingr">
          {ingredientNotes.map((note) => (
            <article key={note.name}>
              <Image src={note.image.src} alt={note.image.alt} width={note.image.width} height={note.image.height} />
              <h3>{note.name}</h3>
              <p>{note.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

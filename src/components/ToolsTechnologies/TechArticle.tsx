function TechArticle({ title }: { title: string }) {
  return (
    <article className="w-full rounded-3xl bg-(--color-primary) border border-(--color-white) p-3">
      <h3 className="font-bold text-(--color-tertiary) text-2xl text-center">
        {title}
      </h3>
      <ul></ul>
    </article>
  );
}

export default TechArticle;

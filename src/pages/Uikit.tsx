export default function Uikit() {
  return (
    <div>
      <h1>heading 1</h1>
      <h2>heading 2</h2>
      <h3>heading 3</h3>
      <h4>heading 4</h4>
      <p className="subtitle">Subtitle</p>
      <p className="subtitle-2">Subtitle 2</p>
      <p className="subtitle-3">Subtitle 3</p>
      <p className="subtitle-4">Subtitle 4</p>

      <p className="p-large">
        This is a large paragraph, perfect for lead text or important content.
      </p>
      <p className="p-medium">
        This is a medium paragraph, standard body text for most content.
      </p>
      <p className="p-large-bold">
        This is a bold large paragraph, useful for emphasis within text.
      </p>
      <p className="p-small">
        This is a small paragraph, ideal for captions or fine print.
      </p>
      <label htmlFor="name">Regular Label</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email" className="label-bold">
        Bold Label
      </label>
      <input type="email" id="email" name="email" />

      <label htmlFor="age" className="label-small">
        Small Label
      </label>
      <input type="number" id="age" name="age" />
    </div>
  );
}

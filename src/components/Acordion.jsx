import { useState } from 'preact/hooks';

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <section class="mb-6">
      <button
        class="w-full text-left text-xl font-bold bg-gray-800 px-4 py-3 rounded-md flex justify-between items-center hover:bg-gray-700 transition"
        onClick={() => setOpen(!open)}
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <div class="mt-4 px-4">{children}</div>}
    </section>
  );
}

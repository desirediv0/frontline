"use client";

import { useState } from "react";
import { Icon } from "./Icons";

export default function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {items.map((f, i) => (
        <div className="faq-item" key={f.q}>
          <button
            className={`faq-q ${open === i ? "open" : ""}`}
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
          >
            {f.q}
            <span className="ic"><Icon.plus width={22} height={22} /></span>
          </button>
          <div className={`faq-a ${open === i ? "open" : ""}`}>
            <p>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

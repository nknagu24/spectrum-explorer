import { useState } from "react";

import type { ReactNode } from "react";

interface CollapsibleSectionProps {

    title: string;

    children: ReactNode;

}

export default function CollapsibleSection({

    title,

    children,

}: CollapsibleSectionProps) {

    const [expanded, setExpanded] =
        useState(false);

    return (

        <section className="collapsible-section">

            <button

                className="collapsible-header"

                onClick={() =>
                    setExpanded(
                        !expanded,
                    )
                }

            >

                <span>

                    {expanded ? "▼" : "▶"}

                </span>

                <span>

                    {title}

                </span>

            </button>

            {expanded && (

                <div className="collapsible-content">

                    {children}

                </div>

            )}

        </section>

    );

}
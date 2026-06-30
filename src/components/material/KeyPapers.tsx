import type { Material } from "../../types/material";

interface KeyPapersProps {

    material: Material;

}

export default function KeyPapers({

    material,

}: KeyPapersProps) {

    return (

        <section>



            <ul>

                {material.keyPapers.map(

                    (paper) => (

                        <li key={paper.doi}>

                            <strong>

                                {paper.title}

                            </strong>

                            {" "}
                            ({paper.year})

                            <br />

                            <a

                                href={`https://doi.org/${paper.doi}`}

                                target="_blank"

                                rel="noopener noreferrer"

                            >

                                DOI: {paper.doi}

                            </a>

                        </li>

                    ),

                )}

            </ul>

        </section>

    );

}
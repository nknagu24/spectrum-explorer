import type { Material } from "../../types/material";

interface WhyItMattersProps {

    material: Material;

}

export default function WhyItMatters({

    material,

}: WhyItMattersProps) {

    return (

        <section>


            <ul>

                {material.whyItMatters.map(

                    (fact, index) => (

                        <li key={index}>

                            {fact}

                        </li>

                    ),

                )}

            </ul>

        </section>

    );

}
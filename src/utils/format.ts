/**
 * ==========================================================
 * Number Formatting Utilities
 * ==========================================================
 */

const superscripts: Record<string, string> = {
    "-": "⁻",
    "0": "⁰",
    "1": "¹",
    "2": "²",
    "3": "³",
    "4": "⁴",
    "5": "⁵",
    "6": "⁶",
    "7": "⁷",
    "8": "⁸",
    "9": "⁹",
};

export function formatScientific(
    value: number,
    digits = 3,
): string {

    const exponential =
        value.toExponential(digits);

    const [mantissa, exponent] =
        exponential.split("e");

    const superscriptExponent =
        exponent
            .split("")
            .map((char) => superscripts[char])
            .join("");

    return `${mantissa} × 10${superscriptExponent}`;
}
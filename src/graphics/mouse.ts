/**
 * ==========================================================
 * Mouse Coordinate Utilities
 * ==========================================================
 */

export function clientToSvgX(
    clientX: number,
    rect: DOMRect,
    svgWidth: number,
): number {

    return (
        ((clientX - rect.left) / rect.width) *
        svgWidth
    );

}
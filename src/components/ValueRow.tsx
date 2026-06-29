interface ValueRowProps {
    label: string;
    value: string;
}

export default function ValueRow({
    label,
    value,
}: ValueRowProps) {
    return (
        <div className="property">

            <span className="property-label">
                {label}
            </span>

            <span className="property-value">
                {value}
            </span>

        </div>
    );
}
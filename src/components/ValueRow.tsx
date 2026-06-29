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
            <span>{label}</span>
            <span>{value}</span>
        </div>
    );
}
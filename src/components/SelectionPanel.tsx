import type { InputMode } from "../types/inputMode";

import "../styles/selectionPanel.css";

interface SelectionPanelProps {

    inputMode: InputMode;

    inputText: string;

    onInputModeChange: (
        mode: InputMode,
    ) => void;

    onInputTextChange: (
        text: string,
    ) => void;

    onCommit: () => void;

}

export default function SelectionPanel({

    inputMode,

    inputText,

    onInputModeChange,

    onInputTextChange,

    onCommit,

}: SelectionPanelProps) {

    return (

        <div className="selection-panel">

            {/* ==============================
                Mode
            ============================== */}

            <span className="selection-label">
                Mode
            </span>

            <div className="selection-value">

                <div className="segmented-control">

                    <button
                        type="button"
                        className={
                            inputMode === "nm"
                                ? "segment active"
                                : "segment"
                        }
                        onClick={() =>
                            onInputModeChange("nm")
                        }
                    >
                        nm
                    </button>

                    <button
                        type="button"
                        className={
                            inputMode === "eV"
                                ? "segment active"
                                : "segment"
                        }
                        onClick={() =>
                            onInputModeChange("eV")
                        }
                    >
                        eV
                    </button>

                </div>

            </div>

            {/* ==============================
                Value
            ============================== */}

            <span className="selection-label">
                Value
            </span>

            <div className="selection-value">

                <input
                    type="text"
                    value={inputText}
                    onChange={(event) =>
                        onInputTextChange(
                            event.target.value,
                        )
                    }
                    onBlur={onCommit}
                    onKeyDown={(event) => {

                        if (
                            event.key === "Enter"
                        ) {

                            onCommit();

                        }

                    }}
                />

            </div>

        </div>

    );

}
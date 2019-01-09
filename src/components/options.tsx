import React from "react";
import "../styles/options.scss";

export default class Options extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="options">
                <button className="option">Pause</button>
                <button className="option">Cancel</button>
            </div>
        );
    }
}
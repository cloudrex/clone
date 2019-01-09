import React from "react";
import "../styles/bar.scss";

export default class Bar extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="bar">
                <div className="fluid"></div>
                <div className="ghost"></div>
                <div className="counter">50%</div>
            </div>
        );
    }
}
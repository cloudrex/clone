import React from "react";
import "../styles/app.scss";
import Bar from "./bar";
import Handle from "./handle";
import Options from "./options";

export default class Application extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="app">
                <Handle />
                <div className="content">
                    <div className="label">
                        <div className="title">Copying </div>
                        <div className="content">
                            <div className="name">something.txt</div>
                            <div className="size">3.2 GB</div>
                        </div>
                    </div>
                    <Bar />
                    <Options />
                </div>
            </div>
        );
    }
}
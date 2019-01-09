import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store} from "../store/store";
import Application from "../components/application";

export const DevelopmentMode: boolean = process.env.NODE_ENV === "development";

export default class App {
	public render(): void {
		console.log("[App] Rendering");

		if (document.getElementById("root") == null) {
			const root: any = document.createElement("div");

			root.id = "root";
			document.body.appendChild(root);
		}

		ReactDOM.render(
			<Provider store={store}>
				{/* TODO: Hard-coded prop as null (required to pass in) */}
				<Application />
			</Provider>,

			document.getElementById("root")
		);
	}

	public init(): void {
		if (DevelopmentMode) {
			this.test();
		}

		this.render();
	}

	public test(): void {
		//
	}
}

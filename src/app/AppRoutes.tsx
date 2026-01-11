import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../pages";
import { Layout } from "./layout";

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
				<Route path="/not-found" element={<NotFound />} />
                    
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
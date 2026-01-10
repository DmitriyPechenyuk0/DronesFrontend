import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { UserMePage } from "../pages/userMe";

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
                	<Route path="user-me/:id" element={<UserMePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
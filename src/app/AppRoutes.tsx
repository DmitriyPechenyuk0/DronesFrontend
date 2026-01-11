import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { UserMePage } from "../pages/userMe";
import { AboutUsPage } from "../pages/aboutUs";

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
                	<Route path="user-me/:id" element={<UserMePage />} />
					<Route path="about-us" element={<AboutUsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
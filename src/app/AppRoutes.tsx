import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { UserMePage } from "../pages/userMe";
import { AboutUsPage } from "../pages/aboutUs";
import { HomePage } from "../pages/home";

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
                	<Route path="user/me/:id" element={<UserMePage />} />
					<Route path="about" element={<AboutUsPage />} />
					<Route path="home" element={<HomePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
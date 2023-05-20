import {BrowserRouter, Routes, Route} from "react-router-dom"

// components
import ProtectedRouteComponent from "./components/ProtectedRouteComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

// user component 
import RouteWithUserChatComponent from "./components/user/RouteWithUserChatComponent";

// public pages 
import HomePage from "./pages/HomePage";
import StayDetailsPage from "./pages/StayDetailsPage";
import StayListPage from "./pages/StayListPage";
import HeartedPage from "./pages/HeartedPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

// protected user pages 
import UserProfilePage from "./pages/user/UserProfilePage"
import UserHeartedDetailsPage from "./pages/user/UserHeartedDetailsPage"

// protected admin pages 
import AdminUsersPage from "./pages/admin/AdminUsersPage"
import AdminStaysPage from "./pages/admin/AdminStaysPage"
import AdminEditUserPage from "./pages/admin/AdminEditUserPage"
import AdminEditStaysPage from "./pages/admin/AdminEditStaysPage"
import AdminCreateStaysPage from "./pages/admin/AdminCreateStaysPage"
import AdminChatsPage from "./pages/admin/AdminChatsPage"
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage"
import ScrollToTop from "./utils/ScrollToTop";
import AdminHome from "./pages/admin/AdminHome";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <HeaderComponent />
      <Routes>
        <Route element ={<RouteWithUserChatComponent/>} >
          <Route path ="/" element={<HomePage />} />
          <Route path ="/stay-list" element={<StayListPage />} />
          <Route path ="/stay-details" element={<StayDetailsPage />} />
          <Route path ="/stay-details/:id" element={<StayDetailsPage />} />
          <Route path ="/hearted" element={<HeartedPage />} />
          <Route path ="/register" element={<RegisterPage />} />
          <Route path ="/login" element={<LoginPage />} />
      
          {/* user protected routes */}
          <Route element ={<ProtectedRouteComponent admin={false}/>}>
           <Route path ="/user" element={<UserProfilePage />} />
            <Route path ="/user/my-hearted" element={<UserHeartedDetailsPage />} />
          </Route>
        </Route>

        {/* admin protected routes */}
        <Route element ={<ProtectedRouteComponent admin={true}/>}>
        <Route path ="/admin" element={<AdminHome />} />
          <Route path ="/admin/users" element={<AdminUsersPage />} />
          <Route path ="/admin/stays" element={<AdminStaysPage />} />
          <Route path ="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path ="/admin/edit-stays" element={<AdminEditStaysPage />} />
          <Route path ="/admin/create-stays" element={<AdminCreateStaysPage />} />
          <Route path ="/admin/chats" element={<AdminChatsPage />} />
          <Route path ="/admin/analytics" element={<AdminAnalyticsPage />} />
        </Route>        
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  );
}

export default App;

/* eslint-disable react/jsx-curly-newline */
import { NavLink, Routes, Route } from "react-router-dom";
import "./userprofile.css";
import UserInfo from "@/components/UserInfo";
import UserBookings from "@/components/UserBookings";
import UserFavorites from "@/components/UserFavorites";
import UserNotifications from "@/components/UserNotifications";

const UserProfile = () => {
  return (
    <section className="section__user grid">
      <aside className="user__menu flex font-lg text-gray">
        <NavLink
          to="/user"
          end
          className={({ isActive }) =>
            isActive ? "user__category-active flex" : "user__category flex"
          }
        >
          <i className="fa-solid fa-user" /> Perfil de usuario
        </NavLink>
        <NavLink
          to="/user/bookings"
          className={({ isActive }) =>
            isActive ? "user__category-active flex" : "user__category flex"
          }
        >
          <i className="fa-solid fa-bed" /> Reservaciones
        </NavLink>
        <NavLink
          to="/user/favorites"
          className={({ isActive }) =>
            isActive ? "user__category-active flex" : "user__category flex"
          }
        >
          <i className="fa-solid fa-heart d-block" title="Favorites" />{" "}
          Favoritos
        </NavLink>
        <NavLink
          to="/user/notifications"
          className={({ isActive }) =>
            isActive ? "user__category-active flex" : "user__category flex"
          }
        >
          <i className="fa-solid fa-envelope d-block" title="Messages" />{" "}
          Notificaciones
        </NavLink>
        <NavLink to="/" className="user__category flex text-accent">
          <i className="fa-solid fa-right-from-bracket" /> Cerrar sesión
        </NavLink>
      </aside>
      <main className="user__content">
        <Routes>
          <Route path="/" element={<UserInfo />} />
          <Route path="bookings" element={<UserBookings />} />
          <Route path="favorites" element={<UserFavorites />} />
          <Route path="notifications" element={<UserNotifications />} />
        </Routes>
      </main>
    </section>
  );
};

export default UserProfile;

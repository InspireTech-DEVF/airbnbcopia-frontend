import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";
import { loginUserService, registerUserService } from "@/services/useServices";
import "./newuserform.css";

const NewUserForm = () => {
  const { login } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const regResponse = await registerUserService(data);
      if (!regResponse.data) {
        throw new Error(`Error ${regResponse}: ${regResponse.status}`);
      }

      const loginData = {
        email: data.email,
        password: data.password
      };

      const response = await loginUserService(loginData);
      if (!response.data) {
        throw new Error(`Error ${response.status}: ${response.status}`);
      }

      const result = response.data;
      console.log("Token type:", typeof result.token);
      console.log("Response JSON:", result);
      if (response.status === 201) {
        login(result.token);
        navigate("/user");
        alert("Bienvenido!");
      } else {
        console.error(result.msg);
        alert(result.msg);
      }
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response?.data || error.message
      );
      alert(`Error: ${error.response?.data.msg || error.message}`);
    }
  };

  return (
    <section className="section__signin grid">
      <form
        className="signin__form flex font-base"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h2 className="signin__title font-2">Registrate</h2>
        <div className="signin__group grid">
          <label htmlFor="firstName" className="signin__label">
            Nombre
          </label>
          <input
            id="firstName"
            className="signin__input"
            {...register("firstName", {
              required: "Debes ingresar un nombre",
            })}
          />
          {errors.firstName && (
            <p className="signin__error flex">
              <i className="fa-solid fa-circle-chevron-left" />
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="signin__group grid">
          <label htmlFor="lastName" className="signin__label">
            Apellidos
          </label>
          <input
            id="lastName"
            className="signin__input"
            {...register("lastName", {
              required: "Debes ingresar un apellido",
            })}
          />
          {errors.lastName && (
            <p className="signin__error flex">
              <i className="fa-solid fa-circle-chevron-left" />
              {errors.lastName.message}
            </p>
          )}
        </div>
        <div className="signin__group grid">
          <label htmlFor="email" className="signin__label">
            Email
          </label>
          <input
            id="email"
            className="signin__input"
            {...register("email", {
              required: "Debes ingresar un correo valido",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Correo invalido",
              },
            })}
          />
          {errors.email && (
            <p className="signin__error flex">
              <i className="fa-solid fa-circle-chevron-left" />
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="signin__group grid">
          <label htmlFor="phone" className="signin__label">
            Telefono
          </label>
          <input
            id="phone"
            type="tel"
            className="signin__input"
            {...register("phone", {
              required: "Debes ingresar un telefono",
              pattern: {
                value: /^\d{10}$/,
                message: "Debe ser al menos 10 digitos",
              },
            })}
          />
          {errors.phone && (
            <p className="signin__error flex">
              <i className="fa-solid fa-circle-chevron-left" />
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="signin__group grid">
          <label htmlFor="username" className="signin__label">
            Username
          </label>
          <input
            id="username"
            className="signin__input"
            {...register("username", {
              required: "Debes ingresar un nombre de usuario",
            })}
          />
          {errors.username && (
            <p className="signin__error flex">
              <i className="fa-solid fa-circle-chevron-left" />
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="signin__group grid">
          <label htmlFor="password" className="signin__label">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            className="signin__input"
            {...register("password", {
              required: "Debes ingresar una contraseña",
            })}
          />
          {errors.password && (
            <p className="signin__error flex">
              <i className="fa-solid fa-circle-chevron-left" />
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="signin__group grid">
          <label htmlFor="role" className="signin__label">
            Elige tu perfil
          </label>
          <select
            id="role"
            className="signin__input"
            {...register("role", { required: "Elige un perfil" })}
          >
            <option value="">Selecciona</option>
            <option value="customer">Huésped</option>
            <option value="provider">Anfitrión</option>
          </select>
          {errors.role && (
            <p className="signin__error flex">
              <i className="fa-solid fa-circle-chevron-left" />
              {errors.role.message}
            </p>
          )}
        </div>
        <button type="submit" className="signin__btn text-white uppercase fw-4">
          Crear cuenta
        </button>
        <Link to="/login" className="login__newuser text-secondary fw-2">
          ¿Ya tienes cuenta?
        </Link>
      </form>
    </section>
  );
};

export default NewUserForm;

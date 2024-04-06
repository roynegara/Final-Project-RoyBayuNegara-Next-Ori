// import UserForm from "@/components/UserForm";
// import usePost from "@/hooks/usePost";
// import { useRouter } from "next/router";
// import { useState } from "react";

// export default function RegisterUserPage() {
//   const router = useRouter();
//   const { pos, loading } = usePost();
//   const [error, setError] = useState(null);

//   const handleRegister = async ({ email, name, password, passwordRepeat, role, profilePictureUrl, phoneNumber }) => {
//     // Validasi password

//     // Panggil API untuk registrasi
//     const response = await pos("/api/v1/register", {
//       email,
//       name,
//       password,
//       passwordRepeat,
//       role,
//       profilePictureUrl,
//       phoneNumber,
//     });

//     // Cek jika respons dari API tidak berhasil
    
//     }

//     // Jika berhasil, arahkan ke halaman login
//     router.push("/login");
//   };

//   return (
//     <div>
//       <UserForm title="Register" onSubmitRegister={handleRegister} loading={loading} />
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }

// //Ori
import UserForm from "@/components/UserForm";
import usePost from "@/hooks/usePost";
import { useRouter } from "next/router";

export default function RegisterUserPage() {
  const router = useRouter();
  const { pos, loading } = usePost();

  const handleRegister = async ({ email, name, password, passwordRepeat, role, profilePictureUrl, phoneNumber }) => {
    pos("/api/v1/register", { email, name, password, passwordRepeat, role, profilePictureUrl, phoneNumber });
    router.push("/login");
  };

  return (
    <div>
      <UserForm title="Register" onSubmitRegister={handleRegister} loading={loading} />
    </div>
  );
}

// import UserForm from "@/components/UserForm";
// import { useRouter } from "next/router";
// import { useState } from "react";

// export default function RegisterUserPage() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [notification, setNotification] = useState(null);

//   const handleRegister = async ({ email, name, password, passwordRepeat, role, profilePictureUrl, phoneNumber }) => {
//     try {
//       setLoading(true);
//       const response = await fetch("/api/v1/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, name, password, passwordRepeat, role, profilePictureUrl, phoneNumber }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         setNotification({ type: "success", message: "Registration successful!" });
//         router.push("/");
//       } else {
//         setNotification({ type: "error", message: data.message });
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//       setNotification({ type: "error", message: "Registration failed. Please try again." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       {notification && (
//         <p style={{ color: notification.type === "error" ? "red" : "green" }}>{notification.message}</p>
//       )}
//       <UserForm title="Register" onSubmit={handleRegister} loading={loading} />
//     </div>
//   );
// }

// import UserForm from "@/components/UserForm";
// import usePost from "@/hooks/usePost";
// import { useRouter } from "next/router";
// import { useState } from "react";

// export default function RegisterUserPage() {
//   const router = useRouter();
//   const { pos, loading } = usePost();
//   const [notif, setNotif] = useState("");

// //   const handleRegister = async ({ email, name, password, passwordRepeat, role, profilePictureUrl, phoneNumber }) => {
// //     try {
// //       const res = await pos("/api/v1/register", {
// //         email,
// //         name,
// //         password,
// //         passwordRepeat,
// //         role,
// //         profilePictureUrl,
// //         phoneNumber,
// //       });
// //       console.log("res", res.data);
// //       setNotif("Status : " + res?.message + " Successfully");
// //       setTimeout(() => {
// //         router.push("/");
// //       }, 3000);
// //     } catch (eror) {
// //       console.log(eror);
// //       setNotif("Status : ", eror?.message);
// //     }
// //   };

// //     const handleRegister = async ({ email, name, password, passwordRepeat, role, profilePictureUrl, phoneNumber }) => {
// //   try {
// //     const res = await pos("/api/v1/register", {
// //       email,
// //       name,
// //       password,
// //       passwordRepeat,
// //       role,
// //       profilePictureUrl,
// //       phoneNumber,
// //     });
// //     console.log("res", res.data);
// //     setNotif("Status : " + res?.message + " Successfully");
// //     setTimeout(() => {
// //       router.push("/");
// //     }, 3000);
// //   } catch (error) {
// //     console.log(error);
// //     if (error.response && error.response.data && error.response.data.errors && error.response.data.errors.length > 0) {
// //       const errorMessage = error.response.data.errors[0].message;
// //       setNotif("Status: " + errorMessage);
// //     } else {
// //       setNotif("Status: " + error.message);
// //     }
// //   }
// // };

//   return (
//     <div>
//       {notif && <p style={{ color: "red" }}>{notif}</p>}
//       {/* {notif && <p style={{ color: notif.type === "err" ? "red" : "green" }}>{notif}</p>} */}
//       <UserForm title="Register" onSubmit={handleRegister} loading={loading} />
//     </div>
//   );
// }

// import UserForm from "@/components/UserForm";
// import usePost from "@/hooks/usePost";
// import { useRouter } from "next/router";

// export default function RegisterUserPage() {
//   const router = useRouter();
//   const { pos, loading } = usePost();

//   const handleRegister = async ({ email, name, password, passwordRepeat, role, profilePictureUrl, phoneNumber }) => {
//     pos("/api/v1/register", { email, name, password, passwordRepeat, role, profilePictureUrl, phoneNumber });
//     router.push("/");
//   };

//   return (
//     <div>
//       <UserForm title="Register" onSubmit={handleRegister} loading={loading} />
//     </div>
//   );
// }

// import UserForm from "@/components/UserForm";
// import usePost from "@/hooks/usePost";
// import { useRouter } from "next/router";

// export default function RegisterUserPage() {
//   const router = useRouter();
//   const { pos, loading, error } = usePost();

//   const handleRegister = async ({ email, name, password, passwordRepeat, role, profilePictureUrl, phoneNumber }) => {
//     try {
//       await pos("/api/v1/register", { email, name, password, passwordRepeat, role, profilePictureUrl, phoneNumber });
//       router.push("/");
//     } catch (error) {
//       console.error("Error registering user:", error.message);
//       // Handle error here, e.g., display an error message to the user
//     }
//   };

//   return (
//     <div>
//       <UserForm title="Register" onSubmit={handleRegister} loading={loading} />
//       {error && <p>Error: {error.message}</p>}
//     </div>
//   );
// }

// export default function RegisterUserPage() {

//     return (
//         <div>
//             <h1>Register</h1>
//         </div>
//     )
// }

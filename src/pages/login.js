import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const [notif, setNotif] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleLogin = () => {
    const payload = {
     
      email: email,
      password: password,
    }
 

    axios
      .post('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login', payload, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c"
        },
      })
      .then((res) => {
        console.log(res);
        setNotif("Status : " + res?.status + " >> Login Successfully, Please Wait...");
        // if (res.status === 200) {
        //   localStorage.setItem("token", res.data.data.token);
        //   router.push("/");
        const token = res?.data?.token
        localStorage.setItem("access_token", token);
        console.log('access_token', token)
        console.log(res?.token)
        router.push("/user");
      })
      .catch((err) => {
        console.log(err.message)
        setNotif("Warning !!! " + err?.response?.data?.error + ", Please Check Again Your Email or Password");
      })
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleLogin}>Login</button>
      <p>{notif}</p>
    </div>
  )

}

export default Login



// import UserForm from "@/components/UserForm";
// import usePost from "@/hooks/usePost";
// import { useRouter } from "next/router";

// export default function LoginUserPage() {
//   const router = useRouter();
//   const { pos, loading } = usePost();

//   const handleLogin = async ({ email, password }) => {
//     pos("/api/v1/login", { email, password });

//     router.push("/");
//   };

//   return (
//     <div>
//       <UserForm title="Login" onSubmitLogin={handleLogin} loading={loading} />
//     </div>
//   );
// }

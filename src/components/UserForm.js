export default function UserForm({
  title,
  defaultEmail,
  defaultNama,
  defaultPassword,
  defaultPasswordRepeat,
  defaultRole,
  defaultProfilePictureUrl,
  defaultPhoneNumber,
  // onSubmit,
  onSubmitRegister,
  onSubmitLogin,
  onSubmitProfile,
  onSubmitRole,
  loading,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("emailUser");
    const name = formData.get("nameUser");
    const password = formData.get("passwordUser");
    const passwordRepeat = formData.get("passwordRepeatUser");
    const role = formData.get("roleUser");
    const profilePictureUrl = formData.get("profilePictureUrlUser");
    const phoneNumber = formData.get("phoneNumberUser");

    // Jika onSubmitLogin tersedia, kirim data login
    if (onSubmitLogin) {
      onSubmitLogin({ email, password });
    } else if (onSubmitProfile) {
      onSubmitProfile({ email, name, profilePictureUrl, phoneNumber });
    } else if (onSubmitRole) {
      onSubmitRole({ role });
    } else {
      onSubmitRegister({ email, name, password, passwordRepeat, role, profilePictureUrl, phoneNumber });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5>{title}</h5>

      {/* Input untuk login */}
      {onSubmitLogin && (
        <>
          <label>Email : </label>
          <input defaultValue={defaultEmail} name="emailUser" placeholder="Email" type="email" />

          <label>Password : </label>
          <input defaultValue={defaultPassword} name="passwordUser" placeholder="Password" type="password" />
        </>
      )}

      {/* Input untuk register */}
      {!onSubmitLogin && (
        <>
          <label>Email : </label>
          <input defaultValue={defaultEmail} name="emailUser" placeholder="Email" type="email" />

          <label>Name : </label>
          <input defaultValue={defaultNama} name="nameUser" placeholder="Name" type="text" />

          <label>Password : </label>
          <input defaultValue={defaultPassword} name="passwordUser" placeholder="Password" type="password" />

          <label>Repeat Password : </label>
          <input
            defaultValue={defaultPasswordRepeat}
            name="passwordRepeatUser"
            placeholder="Repeat Password"
            type="password"
          />

          <label>Role : </label>
          <input defaultValue={defaultRole} name="roleUser" placeholder="Role" type="text" />

          <label>Profile Picture Url : </label>
          <input
            defaultValue={defaultProfilePictureUrl}
            name="profilePictureUrlUser"
            placeholder="Profile Picture Url"
            type="text"
          />

          <label>Phone Number : </label>
          <input defaultValue={defaultPhoneNumber} name="phoneNumberUser" placeholder="Phone Number" type="text" />
        </>
      )}
      {onSubmitProfile && (
        <>
          <label>Email : </label>
          <input defaultValue={defaultEmail} name="emailUser" placeholder="Email" type="email" />

          <label>Name : </label>
          <input defaultValue={defaultName} name="nameUser" placeholder="Name" type="text" />

          <label>Profile Picture Url : </label>
          <input
            defaultValue={defaultProfilePictureUrl}
            name="profilePictureUrlUser"
            placeholder="Profile Picture Url"
            type="text"
          />

          <label>Phone Number : </label>
          <input defaultValue={defaultPhoneNumber} name="phoneNumberUser" placeholder="Phone Number" type="text" />
        </>
      )}

      {onSubmitRole && (
        <>
          <label>Role : </label>
          <input defaultValue={defaultRole} name="roleUser" placeholder="Role" type="text" />
        </>
      )}
      {/* <button type="submit">{loading ? "Loading..." : "Submit"}</button> */}
      <button type="submit">Submit</button>
    </form>
  );
}

// export default function UserForm({
//   title,
//   defaultEmail,
//   defaultNama,
//   defaultPassword,
//   defaultPasswordRepeat,
//   defaultRole,
//   defaultProfilePictureUrl,
//   defaultPhoneNumber,
//     onSubmit,
//   onSubmitRegister,
//   loading,
// }) {
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const email = formData.get("emailUser");
//     const name = formData.get("nameUser");
//     const password = formData.get("passwordUser");
//     const passwordRepeat = formData.get("passwordRepeatUser");
//     const role = formData.get("roleUser");
//     const profilePictureUrl = formData.get("profilePictureUrlUser");
//     const phoneNumber = formData.get("phoneNumberUser");

//       onSubmit({ email, name, password, passwordRepeat, role, profilePictureUrl, phoneNumber });
//       onSubmitRegister({ email, password });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h5>{title}</h5>

//       <label>Email : </label>
//       <input defaultValue={defaultEmail} name="emailUser" placeholder="Email" type="email" />

//       <label>Name : </label>
//       <input defaultValue={defaultNama} name="nameUser" placeholder="Name" type="text" />

//       <label>Password : </label>
//       <input defaultValue={defaultPassword} name="passwordUser" placeholder="Password" type="password" />

//       <label>Repeat Password : </label>
//       <input
//         defaultValue={defaultPasswordRepeat}
//         name="passwordRepeatUser"
//         placeholder="Repeat Password"
//         type="password"
//       />

//       <label>Role : </label>
//       <input defaultValue={defaultRole} name="roleUser" placeholder="Role" type="text" />

//       <label>Profile Picture Url : </label>
//       <input
//         defaultValue={defaultProfilePictureUrl}
//         name="profilePictureUrlUser"
//         placeholder="Profile Picture Url"
//         type="text"
//       />

//       <label>Phone Number : </label>
//       <input defaultValue={defaultPhoneNumber} name="phoneNumberUser" placeholder="Phone Number" type="text" />

//           {/* <button type="onSubmit">{loading ? "Loading..." : title }</button> */}

//           <button type="onSubmit">Register</button>
//     </form>
//   );
// }

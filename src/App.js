// UseState
import React, {useState} from 'react'

const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault();
    console.log(name, password);
  };

  return (
    <form onSubmit={submit}>
      <label>
        Login:
        <input
          value={name}
          onChange={event => setName(event.target.value)}
          name="name"
          type="text"
        />
      </label>
        <label>
        Password:
        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
          name="password"
          type="password"
        />
      </label>
          <button>Send</button>
    </form>
  );
}

export default LoginForm;




// UseContext
// import React, { createContext, useContext } from 'react';


// const UserContext = createContext("without provider");

// const UserProvider = ({ children }) => {
//   const user = {
//     name: 'Eldiyar',
//     age: 30,
//     nationality: 'kyrgyz',
//   };

//   return (
//     <UserContext.Provider value={user}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// const UserProfile = () => {
//   const user = useContext(UserContext);

//   return (
//     <div>
//       <h2>User Profile</h2>
//       <p>Name: {user.name}</p>
//       <p>Age: {user.age}</p>
//       <p>Nationality: {user.nationality}</p>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <UserProvider>
//       <UserProfile />
//     </UserProvider>
//   );
// };

// export default App;
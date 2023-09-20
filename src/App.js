// import logo from './logo.svg';
import './App.css';
import  { useState } from 'react';

import { Button } from 'antd';


function App() {
  return (
    <div class ="App">
      <header className="App-header">
        <Button>Button</Button>
      </header>
    </div>
  );
}

export default App;






// // Định nghĩa component AdminPanel
// function AdminPanel() {
//   return (
//     <div>
//       {/* Nội dung AdminPanel */}
//       <h1>Welcome to Admin Panel</h1>
//     </div>
//   );
// }

// // Định nghĩa component LoginForm
// function LoginForm() {
//   return (
//     <div>
//       {/* Nội dung LoginForm */}
//       <h1>Please Log In</h1>
//     </div>
//   );
// }

// // function MyButton() {
// //   return(  
// //   <button>log</button>)
// // }

// function App() {
//   // Sử dụng useState để quản lý trạng thái đăng nhập
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   let content;
//   if (isLoggedIn) {
//     content = <AdminPanel />;
//   } else {
//     content = <LoginForm />;
//   }


//   // const [count, setCount] = useState(0);

//   // function handleClick() {
//   //   setCount(count + 1);
//   // }


//   return (
//     <div>
//       {content}
//       <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//         {isLoggedIn ? 'Log Out' : 'Log In'}
//       </button>
//     </div>
//     // <div>
//     //   <h1>Counters that update together</h1>
//     //   <MyButton count={count} onClick={handleClick} />
//     //   <MyButton count={count} onClick={handleClick} />
//     // </div>
//   );
// }

// export default App;
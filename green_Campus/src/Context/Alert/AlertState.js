import AlertContext from "./AlertContext";
import React, { useState ,useEffect} from "react";
import { ToastContainer, toast } from "react-toastify";

const LoginState = (props) => {
  const [notificationMsg, setnotificationMsg] = useState("");
  const notify = () => toast(notificationMsg);
 
  // const startAlert=(message)=>{
  //   setnotificationMsg(message,()=>{
      
  //   })
    
  // }
  useEffect(() => {
    
    if(notificationMsg!==""){
      notify();
      setnotificationMsg("")

    }
  }, [notificationMsg])
  
  return (
    <AlertContext.Provider value={{ notificationMsg, setnotificationMsg }}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      {props.children}
    </AlertContext.Provider>
  );
};

export default LoginState;

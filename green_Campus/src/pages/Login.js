import { useState, useContext, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import "./Login.css";
import "react-toastify/dist/ReactToastify.css";
import AlertContext from "../Context/Alert/AlertContext";
import bgSignIn from "../assets/images/bg-home.jpg";


export default function SignIn() {
  

 
  // javascript code
  // useEffect(() => {
  //   const loginText = document.querySelector(".title-text .login");
  //   const loginForm = document.querySelector("form.login");
  //   const loginBtn = document.querySelector("label.login");
  //   const signupBtn = document.querySelector("label.signup");
  //   const signupLink = document.querySelector("form .signup-link a");
  //   signupBtn.onclick = () => {
  //     loginForm.style.marginLeft = "-50%";
  //     loginText.style.marginLeft = "-50%";
  //   };
  //   loginBtn.onclick = () => {
  //     loginForm.style.marginLeft = "0%";
  //     loginText.style.marginLeft = "0%";
  //   };
  //   signupLink.onclick = () => {
  //     signupBtn.click();
  //     return false;
  //   };
  // }, []);

  // Javascript code end
  const navigate = useNavigate();
  useEffect(() => {
    if (Auth.loggedIn()) {
      navigate("/");
    }
  });

  const context = useContext(AlertContext);
  const { setnotificationMsg } = context;

  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);
  console.log(error)
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);

      // await setMessage("Login Succesfull")
      console.log("hellp");
      setnotificationMsg("Login Successfull");
      navigate("/calculator");
    } catch (e) {
      console.log("hellp");
      setnotificationMsg(e.message);

      console.error(e.message);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });

  };
  // // for sign Up
  // const [formStateSignUp, setFormStateSignUp] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  // const [addUser, { error1 }] = useMutation(ADD_USER);
  // const handleChangeSignUp = (event) => {
  //   const { name, value } = event.target;

  //   setFormStateSignUp({
  //     ...formStateSignUp,
  //     [name]: value,
  //   });
  // };
  // const handleFormSubmitSignUp = async (event) => {
  //   console.log(formStateSignUp);
  //   event.preventDefault();
  //   // use try/catch instead of promises to handle errors
  //   try {
  //     const { data } = await addUser({
  //       variables: { ...formStateSignUp },
  //     });

  //     Auth.login(data.addUser.token);
  //     setnotificationMsg("Sign Up Successfull");
  //     navigate("/calculator");
  //   } catch (e) {
  //     setnotificationMsg(e.message);
  //     console.error(e.message);
  //   }
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    // <div className="">

    //   <ThemeProvider theme={defaultTheme}>
    //     <Container component="main" maxWidth="xs">
    //       <CssBaseline />
    //       <Box
    //         sx={{
    //           marginTop: 8,
    //           display: "flex",
    //           flexDirection: "column",
    //           alignItems: "center",
    //         }}
    //       >
    //         <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
    //           <LockOutlinedIcon />
    //         </Avatar>
    //         <Typography component="h1" variant="h5">
    //           Sign in
    //         </Typography>
    //         <Box
    //           component="form"
    //           onSubmit={handleFormSubmit}
    //           noValidate
    //           sx={{ mt: 1 }}
    //         >
    //           <TextField
    //             margin="normal"
    //             required
    //             fullWidth
    //             id="email"
    //             label="Email Address"
    //             name="email"
    //             autoComplete="email"
    //             autoFocus
    //             value={formState.email}
    //             onChange={handleChange}
    //           />
    //           <TextField
    //             margin="normal"
    //             required
    //             fullWidth
    //             name="password"
    //             label="Password"
    //             type="password"
    //             id="password"
    //             autoComplete="current-password"
    //             value={formState.password}
    //             onChange={handleChange}
    //           />
    //           <FormControlLabel
    //             control={<Checkbox value="remember" color="primary" />}
    //             label="Remember me"
    //           />
    //           <Button
    //             type="submit"
    //             fullWidth
    //             variant="contained"
    //             sx={{ mt: 3, mb: 2 }}
    //           >
    //             Sign In
    //           </Button>
    //           <Grid container>
    //             <Grid item>
    //               <Link to="/SignUp" variant="body2">
    //                 {"Don't have an account? Sign Up"}
    //               </Link>
    //             </Grid>
    //           </Grid>
    //         </Box>
    //       </Box>
    //     </Container>
    //   </ThemeProvider>
    // </div>
    // <div className="loginContainer">
    //   <img src={bgSignIn} alt="" className="bgLoginImg" />
    //   <div className="wrapper formLogin">
    //     <div className="title-text">
    //       <div className="title login" onClick={() => {}}>
    //         Login Form
    //       </div>
    //       <div className="title signup">Signup Form</div>
    //     </div>
    //     <div className="form-container">
    //       <div className="slide-controls">
    //         <input type="radio" name="slide" id="login" defaultChecked={checked} onChange={handleRadioChange} />
    //         <input type="radio" name="slide" id="signup" defaultChecked={!checked} onChange={handleRadioChange}/>
    //         <label htmlFor="login" className="slide login">
    //           Login
    //         </label>
    //         <label htmlFor="signup" className="slide signup">
    //           Signup
    //         </label>
    //         <div className="slider-tab"></div>
    //       </div>
    //       <div className="form-inner">
    //         <form action="#" className="login">
    //           <div className="field">
    //             <input
    //               type="email"
    //               placeholder="Email Address"
    //               required
    //               name="email"
    //               autoComplete="email"
    //               autoFocus
    //               value={formState.email}
    //               onChange={handleChange}
    //             />
    //           </div>
    //           <div className="field">
    //             <input
    //               type="password"
    //               placeholder="Password"
    //               required
    //               name="password"
    //               autoComplete="email"
    //               autoFocus
    //               value={formState.password}
    //               onChange={handleChange}
    //             />
    //           </div>
    //           <div className="pass-link">
    //             <button href="">Forgot password?</button>
    //           </div>
    //           <div className="field btn">
    //             <div className="btn-layer"></div>
    //             <input type="submit" value="Login" onClick={handleFormSubmit} />
    //           </div>
    //           <div className="signup-link">
    //             Not a member? <a href="">Signup now</a>
    //           </div>
    //         </form>
    //         <form action="#" className="signup">
    //           <div className="field">
    //             <input
    //               type="text"
    //               placeholder="Name of the College"
    //               required
    //               autoFocus
    //               name="username"
    //               value={formStateSignUp.username}
    //               onChange={handleChangeSignUp}
    //               autoComplete="given-name"
    //             />
    //           </div>
    //           <div className="field">
    //             <input
    //               type="email"
    //               placeholder="Email Address"
    //               required
    //               label="Email Address"
    //               name="email"
    //               autoComplete="email"
    //               value={formStateSignUp.email}
    //               onChange={handleChangeSignUp}
    //             />
    //           </div>
    //           <div className="field">
    //             <input
    //               type="password"
    //               placeholder="Password"
    //               required
    //               name="password"
    //               label="Password"
    //               autoComplete="new-password"
    //               value={formStateSignUp.password}
    //               onChange={handleChangeSignUp}
    //             />
    //           </div>

    //           <div className="field btn">
    //             <div className="btn-layer"></div>
    //             <input
    //               type="submit"
    //               value="Signup"
    //               onClick={handleFormSubmitSignUp}
    //             />
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <div class="wrapper formLogin">
    //     <div class="title-text">
    //       <div class="title login">Login Form</div>
    //       <div class="title signup">Signup Form</div>
    //     </div>
    //     <div class="form-container">
    //       <div class="slide-controls">
    //         <input
    //           type="radio"
    //           name="slide"
    //           id="login"
    //           defaultChecked={checked}
    //           onChange={handleRadioChange}
    //         />
    //         <input
    //           type="radio"
    //           name="slide"
    //           id="signup"
    //           defaultChecked={!checked}
    //           onChange={handleRadioChange}
    //         />
    //         <label for="login" class="slide login">
    //           Login
    //         </label>
    //         <label for="signup" class="slide signup">
    //           Signup
    //         </label>
    //         <div class="slider-tab"></div>
    //       </div>
    //       <div class="form-inner">
    //         <form action="#" class="login">
    //           <div class="field">
    //             <input type="text" placeholder="Email Address" required />
    //           </div>
    //           <div class="field">
    //             <input type="password" placeholder="Password" required />
    //           </div>
    //           <div class="pass-link">
    //             <a href="#">Forgot password?</a>
    //           </div>
    //           <div class="field btn">
    //             <div class="btn-layer"></div>
    //             <input type="submit" value="Login" />
    //           </div>
    //           <div class="signup-link">
    //             Not a member? <a href="">Signup now</a>
    //           </div>
    //         </form>
    //         <form action="#" class="signup">
    //           <div class="field">
    //             <input type="text" placeholder="Email Address" required />
    //           </div>
    //           <div class="field">
    //             <input type="password" placeholder="Password" required />
    //           </div>
    //           <div class="field">
    //             <input
    //               type="password"
    //               placeholder="Confirm password"
    //               required
    //             />
    //           </div>
    //           <div class="field btn">
    //             <div class="btn-layer"></div>
    //             <input type="submit" value="Signup" />
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div> */}
    // </div>
    <div className="loginContainer">
      <img src={bgSignIn} alt="" className="bgLoginImg" />
      <div className="formLogin absolute flex flex-col justify-center  overflow-hidden ">
        <div className="w-full p-6 m-auto  rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Sign in
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <a href="/login" className="text-xs text-purple-600 hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button 
              onClick={handleFormSubmit}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-white">
            {" "}
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium text-purple-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

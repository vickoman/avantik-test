import React, {useContext } from 'react'
import { AppContext } from '../Context/UserContextProvider';
import { useFormik } from 'formik';
const Login: React.FC = () => {
    const {
        onLogin,
      } = useContext(AppContext);

    const formik = useFormik({
      initialValues: {
        username: ''
      },
      onSubmit: ({ username }) => {
        onLogin(username);
      }
    });

    return (
        <div className="antialiased font-sans h-screen">
          <div className="container mx-auto h-full flex justify-center items-center">
            <div className="bg-white w-2/3 h-96  p-8">
              <h2 className="text-2xl text-center font-normal text-indigo-900 ">Hello Friend, tell me your name...</h2>
              <div>
                <form className="form-horizontal w-1/4 mx-auto" onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col mt-8">
                      <input type="text"
                          className="input-auth-form text-indigo-900 pb-3 text-xl border-b-2 border-indigo-700 outline-none"
                          name="username"
                          id="username"
                          onChange={formik.handleChange}
                          value={formik.values.username}
                          placeholder="Your name here:" />
                    </div>
                    <div className="flex flex-col mt-4">
                        <button 
                          className="mt-4 text-indigo-900 font-bold text-base bg-gray border border-indigo-500 rounded-xl py-2"
                          type="submit">
                          Let's go &#8594;
                        </button>
                    </div>
                </form>
              </div>
            </div>

          </div>
        </div>
    )
}

export default Login

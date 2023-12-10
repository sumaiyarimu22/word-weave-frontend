import { Link } from "react-router-dom";
import InputBox from "../components/input.component";
import google from "../imgs/google.png";

const UserAuthForm = ({ type }) => {
  return (
    <section className='h-cover flex items-center justify-center'>
      <form className='w-[80%] max-w-[400px] flex flex-col justify-center'>
        <h1 className='text-4xl font-gelasio capitalize text-center mb-14'>
          {type == "sign-in" ? "Welcome back" : "Join us today"}
        </h1>
        {type !== "sign-in" ? (
          <InputBox
            name='fullname'
            type='text'
            placeholder='Enter your name'
            icon={"fi-rr-user"}
          />
        ) : (
          ""
        )}

        <InputBox
          name='email'
          type='email'
          placeholder='Enter your email'
          icon={"fi-rr-envelope"}
        />
        <InputBox
          name='password'
          type='password'
          placeholder='password'
          icon={"fi-rr-key"}
        />

        <button type='submit' className='btn-dark center mt-14'>
          {type.replace("-", " ")}
        </button>

        <div className='relative w-full flex items-center  gap-2 my-10 uppercase text-black font-bold'>
          <hr className='w-1/2 border-black' />
          <p>or</p>
          <hr className='w-1/2 border-black' />
        </div>

        <button className='btn-dark flex items-center justify-center gap-4'>
          <img src={google} alt='google icon' className='w-5' /> continue with
          google
        </button>

        {type == "sign-in" ? (
          <p className='mt-6 text-dark-grey text-xl text-center'>
            Don't have an account ?{" "}
            <Link to='/signup' className='underline text-black text-xl ml-1'>
              {" "}
              Join us Today
            </Link>
          </p>
        ) : (
          <p className='mt-6 text-dark-grey text-xl text-center'>
            Already a member ?{" "}
            <Link to='/signin' className='underline text-black text-xl ml-1'>
              {" "}
              Sign in here
            </Link>
          </p>
        )}
      </form>
    </section>
  );
};

export default UserAuthForm;

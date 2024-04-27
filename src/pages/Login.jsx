import LoginForm from "@/components/forms/LoginForm";

const Login = () => {
  return (
    <section className="bg-gray-100">
      <div className="container bg-gray-100 h-screen md:px-[50px] flex justify-center items-center">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

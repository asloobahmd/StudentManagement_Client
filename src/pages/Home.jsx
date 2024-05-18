import Dashboard from "@/components/Dashboard";

const Home = () => {
  return (
    <section className="bg-gray-800">
      <div className="container min-h-[calc(100vh-60px)] md:px-[50px] py-8">
        <Dashboard />
      </div>
    </section>
  );
};

export default Home;

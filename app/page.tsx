import LoginCard from "@/components/LoginCard";
import Footer from "@/components/Navigation/Footer";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center pt-24">
        <LoginCard />
      </div>
      <Footer />
    </>
  );
}

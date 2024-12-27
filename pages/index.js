import Chatbot from "@/components/Chatbot/chatbot";
import BackToTop from "./backToTop";
import HomePage from "./home";

export default function Home() {
  return (
    <>
      <HomePage />
      <Chatbot />
      <BackToTop />
    </>
  );
}
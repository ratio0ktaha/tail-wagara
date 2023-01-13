import Nav from "../components/button/Nav";
import Hero from "../components/button/Hero";
import GRAD from "../components/button/gradientbar"
import Four from "../components/button/Four"
import Email from "../components/button/Email"
import Foot from "../components/button/Foot"
import Bar from "../components/button/Bar"



export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      {/* <Bar/>  */}
      {/* <Four img2="/images/bg1.png" title=" Everything you need to dominate PPC" reverse desc="The way that your business can grow on your own terms and stay ahead - at speed. " img="/images/ball.png"/> */}
      <GRAD />
      <Four title=" Look for any invalid Ads targeting your keywords" desc="The way that your business can grow on your own terms and stay ahead - at speed. " img="/images/orignal.png" />


      <Four title="Defend any invalid keywords" reverse="reverse" desc="The way that your business can grow on your own terms and stay ahead - at speed." img="/images/water.png" />



      <Four title=" Optimize your keyword's security" desc="The way that your business can grow on your own terms and stay ahead - at speed." img="/images/pop.png" />





      <Email />
      <Foot />


    </div>
  );
}

// back="/images/bg1.png" 


// img2="/images/bg1.png"}
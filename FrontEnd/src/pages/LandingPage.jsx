import LandingPageSection1 from "../components/LandingPageSection1";
import LandingPageSection2 from "../components/LandingPageSection2";
import LandingPageSection3 from "../components/LandingPageSection3";
import LandingPageSection4 from "../components/LandingPageSection4";
import LandingPageHeader from "../components/LandingPageHeader";
import LandingPageFooter from "../components/LandingPageFooter";

function LandingPage() {
  return (
    <LandingPageHeader styling="text-[#02132D] font-nunito">
      <LandingPageSection1 />
      <LandingPageSection2 />
      <LandingPageSection3 />
      <LandingPageSection4 />
      <LandingPageFooter/>
    </LandingPageHeader>
  );
}

export default LandingPage;

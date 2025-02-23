import LandingPageSection1 from "../components/LandingPageSection1";
import LandingPageSection2 from "../components/LandingPageSection2";
import LandingPageSection3 from "../components/LandingPageSection3";
import LandingPageSection4 from "../components/LandingPageSection4";
import LandingPageHeader from "../components/LandingPageHeader";

function LandingPage() {
  return (
    <LandingPageHeader styling="text-[#02132D]">
      <LandingPageSection1 />
      <LandingPageSection2 />
      <LandingPageSection3 />
      <LandingPageSection4 />
    </LandingPageHeader>
  );
}

export default LandingPage;

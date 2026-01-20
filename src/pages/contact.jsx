import Navbar from "../sections/Navbar.jsx";
import TargetCursor from "../components/TargetCursor.jsx";


export default function Contact() {
    return (
        <>
          <TargetCursor
            spinDuration={2}
            hideDefaultCursor={true}
            parallaxOn={false}
          />
          <Navbar />

          </>
      );
    }
    
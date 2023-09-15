import HeroScreen from "../screens/heroScreen/HeroScreen.jsx";
import FeatureScreen from "../screens/featureScreen/FeatureScreen.jsx";
import HistoryScreen from "../screens/historyScreen/HistoryScreen.jsx";
import SkillScreen from "../screens/skillScreen/SkillScreen.jsx";
import LearnScreen from "../screens/learnScreen/LearnScreen.jsx";

const HomePage = () => {
    return (
        <>
            <HeroScreen/>
            <FeatureScreen/>
            <HistoryScreen/>
            <SkillScreen/>
            <LearnScreen/>
        </>
    )
}

export default HomePage
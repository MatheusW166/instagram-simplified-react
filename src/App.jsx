import Header from "./components/Header";
import Stories from "./components/Stories";
import Pubs from "./components/Pubs";
import Aside from "./components/Aside";
import BottomNavigation from "./components/BottomNavigation";
import db from "./db/db";

export default function App() {
  const stories = db.getStories();
  const pubs = db.getPubs();
  const user = db.getUser();
  const suggestions = db.getSuggestions();
  return (
    <>
      <Header />
      <div className="content">
        <main>
          <Stories stories={stories} />
          <Pubs pubs={pubs} />
        </main>
        <Aside user={user} suggestions={suggestions} />
      </div>
      <BottomNavigation />
    </>
  );
}

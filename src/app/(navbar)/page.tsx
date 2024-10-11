import BookmarkedRecipePreviewList from "@/components/recipe/Preview/Horizontal/BookmarkedRecipePreviewList";
import OwnRecipePreviewList from "@/components/recipe/Preview/Horizontal/OwnRecipePreviewList";
import RecentRecipePreviewList from "@/components/recipe/Preview/Horizontal/RecentRecipePreviewList";
import UserProfile from "@/components/UserProfile";

export default function Home() {

  return (
    <>
      <UserProfile />
      <div className={"px-4"}>
        <RecentRecipePreviewList />
        <BookmarkedRecipePreviewList />
        <OwnRecipePreviewList />
      </div>
    </>
  );
}

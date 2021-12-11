import "../styles.css";
// layout imports
import PostHeader from "../PostHeader";
// image imports
import { freelancePostHeader } from "../page-content/freelance-content";

export default function FreelancePage() {
  return (
    <div className={"background_light"}>
      {/* Page Header */}
      <PostHeader post={freelancePostHeader.post} />
    </div>
  );
}

import "../styles.css";
// layout imports
import PostHeader from "../PostHeader";
// image imports
import { morseHeaderProps } from "../page-content/morse-content";

export default function MorsePage() {
  return (
    <div className={"background_light"}>
      {/* Page Header */}
      <PostHeader post={morseHeaderProps.post} />
    </div>
  );
}

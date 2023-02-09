export default function LikeBtn(props) {
  return (
    <div className="like-btn">
      <label>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="heart"></ion-icon>
        <input type="checkbox" />
      </label>
    </div>
  );
}

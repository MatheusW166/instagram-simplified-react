export default function ChangeThemeBtn() {
  return (
    <div className="switch-theme">
      <input type="checkbox" id="switch-btn" />
      <label htmlFor="switch-btn">
        <ion-icon name="sunny-outline"></ion-icon>
        <ion-icon name="moon-outline"></ion-icon>
      </label>
    </div>
  );
}

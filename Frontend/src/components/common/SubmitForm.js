export default function SubmitForm() {
  return (
    <form className="submit-form">
      <label>
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

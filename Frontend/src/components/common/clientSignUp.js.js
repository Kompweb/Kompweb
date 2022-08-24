export default function SubmitForm() {
  return (
    <div>
      <h1> Client Sign Up</h1>
      <form className="submit-form">
        <label>
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

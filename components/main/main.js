const Main = () => {
return `
<main class='form'>
      <form action="">
        <div>
          <label for="season" class='form__label'>Pick your season:</label>
          <select name="formSeason" class='form__selector'>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
          </select>
        </div>
        <button type="submit" class='form__button'>Submit</button>
        <div></div>
      </form>
    </main>
`
}

export default Main;



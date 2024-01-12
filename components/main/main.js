import Button from '../button/button.js';

const Main = () => {
    return `
        <main>
            <form class="form">
                <div class='form__container'>
                    <label for="form__season"></label>
                    <select name="form__season" class="season__list">
                        <option value="" disabled selected>Select a season</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Fall">Fall</option>
                    </select>
                <div>
                    ${Button('Generate your cocktail')}
                    </div>
                    <div class="cocktail__container"></div>
                </div>
                </div>
            </form>
        </main>
    `;
}

export default Main;



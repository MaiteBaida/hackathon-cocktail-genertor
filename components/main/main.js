import Button from '../button/button.js';

const Main = () => {
    return `
        <main>
            <form class="form">
                <div class='form__container'>
                    <label for="form__mood"></label>
                    <select name="form__mood" class="form__mood-list">
                        <option value="" disabled selected>How are you feeling today?</option>
                        <option value="Anxious">Anxious 😰</option>
                        <option value="Hopeful">Hopeful 🥺</option>
                        <option value="Romantic">Romantic 🥰</option>
                        <option value="Humorous">Humorous 🥸</option>
                        <option value="Angry">Angry 😡</option>
                        <option value="Stressed">Stressed 😩</option>
                        <option value="Happy">Happy 😊</option>
                        <option value="Gloomy">Gloomy 😔</option>
                        <option value="Chill">Chill 😎</option>
                    </select>
                <div>
                    ${Button('Generate your cocktail')}
                </div>
                </div>
                    <div class="form__cocktail-container"></div>
                </div>
                
            </form>
        </main>
    `;
}

export default Main;



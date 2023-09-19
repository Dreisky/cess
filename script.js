alert('This website is made only for Princess Angelica Bermejo');
function getVal() {
    const inputElement = document.querySelector('.js-input');
    if(inputElement.value === 'Princess' || inputElement.value === 'princess' || inputElement.value === 'PRINCESS') {
        const questionPageHTML = `
        <main class="main-s">
        <div class="yesno-box">
            <div>
                <h2>Will you be my Girlfriend?</h2>
            </div>
            <div class="yesno-button">
                <button onclick="
                    questionResult('yes');
                ">Yes</button>
                <button onclick="
                    questionResult('no');
                ">No</button>
            </div>
        </div>
        </main>
        `
        document.body.innerHTML = questionPageHTML;
    } else if (inputElement.value) {
        document.querySelector('.js-red').innerHTML = 'Leave now!'
    }
}

function questionResult(res) {
    const lastPageHTML = `
    <main class="main-last">
        <div class="info-box">
            <div>
                <h1>About Me</h1>
            </div>

            <div class="info-text">
                <div prof-tab>
                    <img src="prof.jpg" class="profile-pic">
                </div> 
                <div>   
                    <h1>Name: Andrei Victor Lauan Balabbo</h1>
                    <h4>Age: 19 years old</h4>
                    <h4>From: Calamagui, San Pablo, Isabela</h4>
                </div>
            </div>
        </div>
        
        <div class="hobbies-tab">
            <div>
                <h1>Hobbies</h1>
            </div>

            <div>
                <div>
                    <h3>1. Playing Online Games</h3>
                    <p>I love to play games, I enjoy it so much.</p>
                </div>
                <div>
                    <h3>2. Eatingggg</h3>
                    <p>Eating something delicious is my favorite thing to do.</p>
                </div>
                <div>
                    <h3>3. Talking to you</h3>
                    <p>I love it when we're taling, you make me happy eveytime baby. mwamwaa!</p>
                </div>
            </div>
        </div>

        <div class="like-tab">
            <div>
                <h1>What I love about you.</h1>
            </div>
            <div>
                <p>1. I Love how you smile</p>
                <p>2. I Love how you make me smile</p>
                <p>3. I Love how you talk to me</p>
                <p>4. I Love how you make me feel special!</p>
                <p>5. I Love everything about you!</p>
                <p>5. I Love Youuuu!</p>
            </div>
        </div>

        <div class="remember-tab">
            <div>
                <h1>Remember This!</h1>
                <p>Always tell me if you have a problem, I'll always be here for you. Be comfortable with me as if I am your bestfriend. You can always share anything, I don't care what it is, I'll always be interested.</p> 
                <h5>I LOVE YOU BABYCAKES LOVEYDOVES HONEYBUNCH SUGARPLUM</h5>
            </div>
        </div>
    </main>
    `
    if(res === 'yes') {
        document.body.innerHTML = lastPageHTML;
    } else if (res === 'no') {
        alert('Ano\'ng No, bawal No AHAHAHAH');
    }
}
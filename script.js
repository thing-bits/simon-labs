
function SimonGame() {
    var self = this;
    const colors = ['green', 'red', 'yellow', 'blue'];
    this.sequence = [];
    this.level = 1;
    this.userClickCount = 0;

    this.init = function () {
        this.generateSequence()
        this.showSequence()
        
        const buttons = document.getElementsByTagName('button')
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', self.checkUserInput);
        }
        
    }
    
    this.generateSequence = function () {
        const counter = document.getElementById('counter');
        counter.innerText = this.level;
        const ramdomColor = Math.floor(Math.random() * 4);
        this.sequence.push(colors[ramdomColor]);
    };
    this.showSequence = function () {
        let current = 0;
        
        
        let interval = setInterval(function () {
            if (!self.sequence[current]) {
                clearInterval(interval);
                return;
            }
            
            let button = document.getElementById(self.sequence[current]);
            button.classList.add('active');
            setTimeout(function () {
                button.classList.remove('active');
            }, 700)
            
            current++;
        }, 1000)
        
        this.checkUserInput = function () {
            if (this.getAttribute('id') !== self.sequence[self.userClickCount]) {
                window.alert('Game Over');
                return;
            }
    
            self.userClickCount++;
    
            if (self.userClickCount === self.sequence.length) {
                this.level++;
                self.userClickCount = 0;
                self.generateSequence();
                self.showSequence();
            }
    
            //console.log(this.getAttribute('id'));
        };    
    };
};

const game = new SimonGame();

game.init();

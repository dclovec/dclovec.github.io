
// ; (function (window) {

var ALL_OPERATORS = {
    ADD: '+',
    MINUS: '-',
    MULTI: '×',
    DIVIDE: '÷',
};
var operatorSeeds = [
    ALL_OPERATORS.ADD,
    ALL_OPERATORS.MINUS,
    ALL_OPERATORS.MULTI,
    ALL_OPERATORS.DIVIDE,
];
var operatorSeedsLen = operatorSeeds.length;
function randomOperator() {
    return operatorSeeds[~~(Math.random() * operatorSeedsLen)];
}

function randomNumber(min, max) {
    return min + ~~(Math.random() * (max - min));
}
function calculate(n1, operator, n2) {
    switch (operator) {
        case ALL_OPERATORS.ADD:
            return n1 + n2;
        case ALL_OPERATORS.MINUS:
            return n1 - n2;
        case ALL_OPERATORS.MULTI:
            return n1 * n2;
        case ALL_OPERATORS.DIVIDE:
            return n1 / n2;
        default:
            return;
    }
}

function generate(operator) {

    var n1 = randomNumber(1, 11);
    var n2 = randomNumber(1, 11);

    var question = n1.toString() + ' ' + operator + ' ' + n2.toString() + ' = ?';
    var answer = calculate(n1, operator, n2);

    return {
        question: question,
        answer: answer,
    };

}

window.Question = function (operator) {

    if (!(this instanceof Question)) {
        return new Question(operator);
    }



    var data;

    this.get = function () {
        if (!data) {
            data = generate(operator || randomOperator());
        }
        return data;
    };
    this.regenerate = function (operator) {
        data = generate(operator || randomOperator());
        return this;
    };

};

// })(window);
var step = 0;
var form = document.getElementById('survey');
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';

var decisions = {
"start": {
    "question": "What is your investment style?",
    "answers": {
        "a": "aggresive",
        "b": "mild",
        "c": "weak",
    }
},
// decision path - after first selection
"1_a": {
    "question": "How much do you earn?",
    "answers": {
        "a": "I earn a lot",
        "b": "I earn enough",
        "c": "I need money!",
    }
},
"1_b": {
    "question": "How much do you save?",
    "answers": {
        "a": "I save a lot",
        "b": "I save enough",
        "c": "I save a little!",
    }
},
"1_c": {
    "question": "How much do you invest?",
    "answers": {
        "a": "I invest a lot",
        "b": "I invest enough",
        "c": "I invest a little!",
    }
},

// decision path - after second selection
"2_a": {
    "question": "Are you a risk taker?",
    "answers": {
        "a": "Yes I enjoy risk",
        "b": "No but I can endure some",
        "c": "Never",
    }
},
"2_b": {
    "question": "What is your goal?",
    "answers": {
        "a": "50% and more",
        "b": "30% and more",
        "c": "10% and more",
    }
},
"2_c": {
    "question": "What is your favorite subject",
    "answers": {
        "a": "Economy",
        "b": "Forest",
        "c": "Belly button",
    }
},

};

///////////////////////////////////////////////////////////////////////////
// continuous link
submit.addEventListener('mouseup', function(){
    answer = form.querySelectorAll('input[type=radio]:checked')[0].value;
    if (answer) {
        step++;
        console.log(step + '_' + answer);
        if (step === 3) {
            form.querySelector('p').innerHTML = "Done!";
            form.querySelector('fieldset').innerHTML = '';
            submit.style.visibility='hidden';
            return;
        }
        populateForm(step + '_' + answer);
        
    }
});

// reset button
function resetForm(){
    document.getElementById("survey").reset();
};

// generate answers from story
function populateForm(path) {
    var cur_decision = decisions[path];
    var text = '';

    for (var prop in cur_decision['answers']){
        if (cur_decision['answers'].hasOwnProperty(prop)){
            text += '<label><input type="radio" name="answer" value="' + prop + '"/><span>' + cur_decision['answers'][prop] + '</span></label>';
        }
    }
    form.querySelector('p').innerHTML = cur_decision.question;
    form.querySelector('fieldset').innerHTML = text;
};

populateForm("start");


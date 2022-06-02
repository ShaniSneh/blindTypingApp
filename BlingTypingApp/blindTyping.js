/*global $, document*/
/*
 *********************************************************
 * TODO:
 * 1. Add nodejs server with sql database for my quotes(fields:id,quote,level).
 * 2. Get the Quote from db instead of dummy list.
 * 3. Add index of each level. So progress isn't deleted when trying 
 *      different level and returning to previous level. (easy -> mid -> easy)
 * 4. Add login/register option.
 * 5. Add page for submitting new quotes(for manager only)
 *      [imporovement idea for next step-> users can suggest new quotes, manager can approve or not]
 * 
 * *******************************************************
 * TO TEST!!!
 * 1. Range of index of quote list (Currently vulnerable for attacks)- To fix!!!
 * 2. Check server response to quote request. If empty, give message.
 * 
 * *******************************************************
*/

var easy = ["This is a test", "This is another test"];
var med = ["This is a medium quote"];
var hard = ["This is a hard quote"];

var cntq, currIndex = 0, mistakes = 0;

function getdate() {
    var today = new Date(), m = today.getMinutes(), s = today.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    if (m < 10) {
        m = "0" + m;
    }
    $("p .timer").text(m + " : " + s);
    setInterval(function () { getdate(); }, 500);
}

var app = new Vue({
    el: '#app',
    data: {
        levels: [
            { id: 1, desc: 'Beginner' },
            { id: 2, desc: 'Intermediate' },
            { id: 3, desc: 'Expert' }
        ],
        chosen: null,
        currQuote: "",
        currIndex: 0,
        menu: true,
        mistake: false,
        good: false,
        copied: "",
        org: "",
        timerId: null,
        start: true,
        savedTime: '00:00',
        lev: 0,
        errors: 0
    },
    methods: {
        chosenLevel: function (level) {
            this.lev = level;
            if (level == 3) {
                this.currQuote = hard[currIndex];
            }
            else if (level == 2) {
                this.currQuote = med[currIndex];
            }
            else {
                this.currQuote = easy[currIndex];
            }
            this.menu = false;

            // I need to save the current quote twice, one for reference and one for modifications.
            this.org = currQuote;
        },
        startTimer: function () {
            this.start = false;
            getdate();
        },
        stopTimer: function () {
            clearInterval(timerId);
            this.savedTime = $("p .timer").val;
            this.start = true;

        },
        compareText: function () {
            let len = this.copied.length;
            var tocomp = this.currQuote.substr(0, len);

            if (this.copied == tocomp) {
                this.mistake = false;
                this.org = '<mark>' + tocomp + '</mark>' + this.currQuote.substr(len);
            } else {
                if (this.lev == 3) {
                    this.copied = "";
                }
                else {
                    this.org = '<mark id="error">' + tocomp + '</mark>' + this.currQuote.substr(len);
                }
                this.mistake = true;
                this.errors++;
            }

            if (len == this.currQuote.length) {
                this.good = true;
            }
        },
        next: function () {
            this.currIndex++;
            this.errors = 0;
            this.chosenLevel(this.lev);
        },
        return: function () {
            this.currIndex = 0;
            this.currQuote = "";
            this.menu = true;
        }
    }
        
});

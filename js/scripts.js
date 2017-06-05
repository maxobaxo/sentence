$(document).ready(function() {
  $("#groceries").submit(function(event) {
    event.preventDefault();

    var sentence = $("input#sentence").val();


    var words = sentence.split(" ");

    var newWords = words.map(function(word) {
      if (word.length >= 3) {
        return word;
      }
    });

    var reverseWords = newWords.reverse();
    var stringWords = reverseWords.join(" ");  alert(stringWords);
  });
});

const sentences = [
    "Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.",
    "Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.",
    "Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar."
  ];
  
  function result(sentence) {
    var words = sentence.toString().split(' ');
    var longest = 23;
  
    for (var i=0;i<words.length;i++) {
      if (words[i].length > longest) {
        longest = words[i].length;
      }
    }
    return longest;
  }
  
  console.log(result(sentences));
  
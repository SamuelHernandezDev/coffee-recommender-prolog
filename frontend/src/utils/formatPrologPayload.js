// src/utils/formatPrologPayload.js
export function formatPrologPayload(answers = []) {
  const questionToPredicate = {
    b1: "strength",
    b2: "category",
    b3: "sweetness",
    b4: "milk",
    b5: "creamy",
    b6: "flavors",
    b7: "size",

    i1: "texture",
    i2: "shots",
    i3: "extra",
    i4: "style",
    i5: "temperature",
    i6: "foam",
    i7: "balance",
    i8: "art_or_traditional",

    e1: "flavor",
    e2: "brew_method",
    e3: "body",
    e4: "seasonal",
    e5: "acidity",
    e6: "roast",
    e7: "aftertaste",
    e8: "complexity",
    e9: "experimental",
    e10: "caffeine_level"
  };

  return answers.map(ans => {
    const q = ans.questionId || ans.id || ans.question; 
    const pred = questionToPredicate[q];
    if (!pred) return null;
 
    return `${pred}(${ans.value})`;
  }).filter(Boolean);
}

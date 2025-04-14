//type Scores = Record<string, number>;
type Scores = {
  [k: string]: number;
};

const scores: Scores = {};

scores.math = 95;
scores.english = 90;
scores.science = 85;

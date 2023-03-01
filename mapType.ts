let studentScores=new Map([["john",90],["dan",100],["ahmed",80]]);
console.log(studentScores.get("dan"));
studentScores.set("dan",50);
console.log(studentScores.get("dan"));
console.log(studentScores);
console.log(studentScores.delete("ahmed"))
console.log(studentScores)
studentScores.clear();
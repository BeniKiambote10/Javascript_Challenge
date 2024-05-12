// VERY HARD : Object prototype chain and prototypal inheritance exercise.




class Person {
    constructor(name, job, age) { //Create a Person constructor that has three properties: name, job, and age.
      this.name = name;
      this.job = job;
      this.age = age;
    }
  
    exercise() {
      console.log(`${this.name} says: Running is fun! - said no one ever`); //Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".

    }
  
    fetchJob() {
      console.log(`${this.name} is a ${this.job}`); //Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
    }
  }
  // Create a Programmer constructor that inherits all the members from Person with an additional 'languages' 
  // property that is passed in and a busy property that is NOT passed in and is set to true by default.

  class Programmer extends Person {
    constructor(name, job, age, languages) {
      super(name, job, age);
      this.languages = languages;
      this.busy = true;
    }

    // Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also, 
    // give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.

  
    completeTask() {
      this.busy = false;
    }
  
    acceptNewTask() {
      this.busy = true;
    }
    // Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another 
    // if the programmer is not, e.g., should initially log out "Mark can't accept any new tasks right now." 
    // and "Mark would love to take on a new responsibility." if the programmer is not busy.
  
    offerNewTask() {
      if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
      } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
      }
    }
  
    learnLanguage(newLanguage) {
      this.languages.push(newLanguage);
    }
  
    listLanguages() {
      return `${this.name} knows: ${this.languages.join(", ")}`;
    }
  }
  
  const person1 = new Person("Harold", "Backend Engineer", 20);
  const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
  const c2 = new Programmer("Edwin", "Janitor", 55, ["HTML", "SASS", "Ruby"]);
  const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);
  
  c1.learnLanguage("CSS");
  c2.learnLanguage("C++");
  c3.learnLanguage("JAVA");
  
  console.log(c1.listLanguages());
  console.log(c2.listLanguages());
  console.log(c3.listLanguages());
  
  console.log(person1);
  console.log(c1);
  console.log(c2);
  console.log(c3);
  
  person1.exercise();
  person1.fetchJob();
  
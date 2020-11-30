import eloquentJavaScriptJPG from "../img/EloquentJavaScript.jpg";
import javaScriptAndJQueryJPG from "../img/JavaScript&JQuery.jpg";
import javaScriptTheGoodPartsJPG from "../img/JavaScriptTheGoodParts.jpg";

export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Eloquent JavaScript: A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      price: 100,
      coverImage: eloquentJavaScriptJPG,
    },
    {
      id: 2,
      title: "JavaScript & JQuery: Interactive Front-End Web Development",
      author: "Jon Duckett",
      price: 70,
      coverImage: javaScriptAndJQueryJPG,
    },
    {
      id: 3,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      price: 120,
      coverImage: javaScriptTheGoodPartsJPG,
    },
  ];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.8) {
          reject(new Error("Oops, your random number is more then 0.8 =)"));
        } else {
          resolve(this.data);
        }
      }, 1000);
    });
  }
}

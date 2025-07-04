


const res = document.getElementById("res");
document.getElementById("btn").addEventListener(
    "click", function () {
        const animal = document.getElementById("sound").value;
        if (!animal) {
  res.textContent = "Please enter an animal name";
  return;
}

        switch (animal.trim().toLowerCase()) {
            case "dog":
                res.textContent = "Woof woof!";
                break;


            case 'cat': res.textContent = 'Meow';
                break;
            case 'cow': res.textContent = 'Moo';
                break;
            case 'chicken': res.textContent = 'Cluck cluck';
                break;

            case 'elephant': res.textContent = 'Pawooorrr!';
                break
            default:
                res.textContent = "Sorry, I don't know that animal sound";

        }
    }
)
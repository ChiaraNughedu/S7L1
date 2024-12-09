const btnAdd = document.getElementById("insert");
const petForm = document.getElementById("petForm");
const petList = document.getElementById("petList");
const petName = document.getElementById("petName");
const ownerName = document.getElementById("ownerName");
const species = document.getElementById("species");
const breed = document.getElementById("breed");
const pets = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  sameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName; 
}
}

const createList = function() {
  petList.innerText = "";
  pets.forEach((pet) => {
    const newli = document.createElement("li");
    newli.innerText =
      "Nome: " +
      pet.petName +
      ", Proprietario: " +
      pet.ownerName +
      ", Animale: " +
      pet.species +
      ", Razza: " +
      pet.breed;
    petList.appendChild(newli);
  });
};

btnAdd.onclick = function(event) {
  event.preventDefault();
  let newPet = new Pet(
    petName.value,
    ownerName.value,
    species.value,
    breed.value
  );
  pets.push(newPet);
  createList();
  petName.value = "";
  ownerName.value = "";
  species.value = "";
  breed.value = "";
}


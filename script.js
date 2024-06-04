let works = [];
let categories = [];
const gallery = document.querySelector(".gallery");

// récup des categories
const getCategories = async () => {
  const response = await fetch("http://localhost:5678/api/categories");
  if (response.ok) {
    const categories = await response.json();
    console.log(response)
    console.log(categories)
   
  } else {
    alert("Une erreur s'est produite lors de la récupération des categories");
  }
};

getCategories();

// recup des travaux
const getWorks = async () => {
  const response = await fetch("http://localhost:5678/api/works");
  if (response.ok) {
    const works = await response.json();
    console.log(response)
    console.log(works)
    displayWorks()
  } else {
    alert("Une erreur s'est produite lors de la récupération des travaux");
  }
};

/// on ajoute les display pour afficher les travaux
const displayWorks = () => {
  console.log(" message depuis fonction displayWorks")
  console.log(works)  // ici affiche vide car à la ligne 24 j'ai mis "const works = await response.json();"
                      // or works est deja déclaré plus haut à la ligne 1 "let works = [];" comme une variable et non comme une constante "const"
                      // le JS comprends que c'est une autre 'variable' c'est pour cela qu'il l'affiche vide !!

  for (let i = 0; i < works.length; i++) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
  }
}

getWorks();

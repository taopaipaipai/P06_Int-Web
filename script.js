let works = [];
const gallery = document.querySelector(".gallery");

const getWorks = async () => {
  const response = await fetch("http://localhost:5678/api/works");
  if (response.ok) {
    const works = response.json();
    console.log(response)
    console.log(works)
   
  } else {
    alert("Une erreur s'est produite lors de la récupération des travaux");
  }
};

getWorks();

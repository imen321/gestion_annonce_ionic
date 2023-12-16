import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListadsService {
  private allads = [
    { id: 1 ,title: 'rozen Free Fall',image:'https://img.utdstc.com/screen/286/7f8/2867f8f9362c79215d62d0580885054174049b5e4bc81f33cb9d326d623a7d0f:200', description: 'Frozen Free Fall est un jeu de casse-tête dassociation par 3 tout comme Bejeweled. Cette fois, vous briserez des roches colorées à lintérieur du monde magique de Frozen, la dernière fonctionnalité animée de Disney Le jeu est conçu de plus dune centaine de niveaux différents où vous devez associer autant de pierres que vous pouvez. Et, alors que vous avancez à travers le jeu, vous serez en mesure de déverrouiller de plus en plus de caractères. Vous commencerez avec Elsa et Anna, mais bientôt vous serez en mesure de jouer avec Olaf, Svan, Kristoff, Hans et Pabbie. Chaque personnage présenté en Frozen Free Fall possède leurs propres habiletés spéciales, ce qui vous aidera à vous sortir de certaines situations compliquées. Hans, par exemple, peut utiliser son épée pour détruire plusieurs rangées de roches dun seul coup.' },

    {  id:2,title: 'Black Swan',image:'https://media.senscritique.com/media/000004876939/0/black_swan.jpg',description: 'Quelques décennies dhistoire américaine, des années 1940 à la fin du XXème siècle, à travers le regard et létrange odyssée dun homme simple et pur, Forrest Gump'},
  ];

  constructor() { }
  getAllads() {
    return this.allads;
  }
  getadsById(id: any){
    return this.allads.find((element) => element.id == id);
  }

  deleteads(Ads:any) {
    let i = this.allads.indexOf(Ads);
    this.allads.splice(i ,1);
  }
  addads(newads:any) {
    newads.id = this.allads[this.allads.length - 1].id + 1;
    newads.keywords = newads.description
    this.allads.push(newads);
  }


}


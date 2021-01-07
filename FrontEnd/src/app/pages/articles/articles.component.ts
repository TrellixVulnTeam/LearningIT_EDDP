import { Component, OnInit } from '@angular/core';

const TEST = [
  { id: 1,
    title: 'Articolul 1',
    Content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    imageURL: 'https://media.wired.com/photos/5d31f0327e21db0008efc4ee/master/w_2560%2Cc_limit/Gear-Sony-RX100VI-SOURCE-Sony.jpg'
  },
  { id: 2,
    title: 'Articolul 2',
    Content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    imageURL: 'https://media.wired.com/photos/5d31f0327e21db0008efc4ee/master/w_2560%2Cc_limit/Gear-Sony-RX100VI-SOURCE-Sony.jpg'
  },
  { id: 3,
    title: 'Articolul 3',
    Content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    imageURL: 'https://media.wired.com/photos/5d31f0327e21db0008efc4ee/master/w_2560%2Cc_limit/Gear-Sony-RX100VI-SOURCE-Sony.jpg'
  },

];

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  test = TEST;

  constructor() { }

  ngOnInit(): void {
  }

  onclick(clickedid){
    localStorage.setItem('ArticleId', clickedid);
    return clickedid;
  }

}
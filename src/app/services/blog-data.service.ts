import { Injectable } from '@angular/core';
import { BlogPost } from '../classes/blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }
  getBlugData(){
    return [
      [
        new BlogPost("title 1", "Fugiat amet officia ipsum ut ea ut. Nulla ipsum dolor incididunt adipisicing officia dolor culpa incididunt cupidatat amet officia tempor et. Aliqua laboris proident dolor veniam irure nulla cupidatat culpa sint duis aliqua. Pariatur pariatur qui mollit labore veniam non sunt esse labore irure qui ullamco ipsum. Minim reprehenderit consequat aute non adipisicing labore eu reprehenderit. Amet nostrud quis tempor amet tempor pariatur."),
        new BlogPost("title 2", "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum."),
        new BlogPost("title 3", "Magna nisi culpa anim consequat deserunt duis quis deserunt in sit nisi. Amet amet esse labore consectetur velit est in in ipsum irure commodo aute. Sunt Lorem eiusmod ipsum ex irure minim mollit exercitation non laborum anim consequat magna. Fugiat sunt sunt amet aliqua voluptate commodo reprehenderit."),
        new BlogPost("title 4", "Adipisicing do exercitation dolor officia fugiat sit aute. Ex voluptate irure officia laborum est reprehenderit. Do consectetur laborum consequat proident est est. Ut irure deserunt aliquip laborum quis id eiusmod incididunt in nulla ipsum cillum. Cupidatat Lorem proident fugiat occaecat non elit. Mollit elit incididunt quis consequat occaecat.")
      ],
      [
        new BlogPost("title 5", "Fugiat amet officia ipsum ut ea ut. Nulla ipsum dolor incididunt adipisicing officia dolor culpa incididunt cupidatat amet officia tempor et. Aliqua laboris proident dolor veniam irure nulla cupidatat culpa sint duis aliqua. Pariatur pariatur qui mollit labore veniam non sunt esse labore irure qui ullamco ipsum. Minim reprehenderit consequat aute non adipisicing labore eu reprehenderit. Amet nostrud quis tempor amet tempor pariatur."),
        new BlogPost("title 6", "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum."),
        new BlogPost("title 7", "Magna nisi culpa anim consequat deserunt duis quis deserunt in sit nisi. Amet amet esse labore consectetur velit est in in ipsum irure commodo aute. Sunt Lorem eiusmod ipsum ex irure minim mollit exercitation non laborum anim consequat magna. Fugiat sunt sunt amet aliqua voluptate commodo reprehenderit."),
        new BlogPost("title 8", "Adipisicing do exercitation dolor officia fugiat sit aute. Ex voluptate irure officia laborum est reprehenderit. Do consectetur laborum consequat proident est est. Ut irure deserunt aliquip laborum quis id eiusmod incididunt in nulla ipsum cillum. Cupidatat Lorem proident fugiat occaecat non elit. Mollit elit incididunt quis consequat occaecat.")
      ],
      [
        new BlogPost("title 9", "Fugiat amet officia ipsum ut ea ut. Nulla ipsum dolor incididunt adipisicing officia dolor culpa incididunt cupidatat amet officia tempor et. Aliqua laboris proident dolor veniam irure nulla cupidatat culpa sint duis aliqua. Pariatur pariatur qui mollit labore veniam non sunt esse labore irure qui ullamco ipsum. Minim reprehenderit consequat aute non adipisicing labore eu reprehenderit. Amet nostrud quis tempor amet tempor pariatur."),
        new BlogPost("title 10", "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum."),
        new BlogPost("title 11", "Magna nisi culpa anim consequat deserunt duis quis deserunt in sit nisi. Amet amet esse labore consectetur velit est in in ipsum irure commodo aute. Sunt Lorem eiusmod ipsum ex irure minim mollit exercitation non laborum anim consequat magna. Fugiat sunt sunt amet aliqua voluptate commodo reprehenderit."),
        new BlogPost("title 12", "Adipisicing do exercitation dolor officia fugiat sit aute. Ex voluptate irure officia laborum est reprehenderit. Do consectetur laborum consequat proident est est. Ut irure deserunt aliquip laborum quis id eiusmod incididunt in nulla ipsum cillum. Cupidatat Lorem proident fugiat occaecat non elit. Mollit elit incididunt quis consequat occaecat.")
      ],
      [
        new BlogPost("title 13", "Fugiat amet officia ipsum ut ea ut. Nulla ipsum dolor incididunt adipisicing officia dolor culpa incididunt cupidatat amet officia tempor et. Aliqua laboris proident dolor veniam irure nulla cupidatat culpa sint duis aliqua. Pariatur pariatur qui mollit labore veniam non sunt esse labore irure qui ullamco ipsum. Minim reprehenderit consequat aute non adipisicing labore eu reprehenderit. Amet nostrud quis tempor amet tempor pariatur."),
        new BlogPost("title 14", "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum."),
        new BlogPost("title 15", "Magna nisi culpa anim consequat deserunt duis quis deserunt in sit nisi. Amet amet esse labore consectetur velit est in in ipsum irure commodo aute. Sunt Lorem eiusmod ipsum ex irure minim mollit exercitation non laborum anim consequat magna. Fugiat sunt sunt amet aliqua voluptate commodo reprehenderit."),
        new BlogPost("title 16", "Adipisicing do exercitation dolor officia fugiat sit aute. Ex voluptate irure officia laborum est reprehenderit. Do consectetur laborum consequat proident est est. Ut irure deserunt aliquip laborum quis id eiusmod incididunt in nulla ipsum cillum. Cupidatat Lorem proident fugiat occaecat non elit. Mollit elit incididunt quis consequat occaecat.")
      ]
    ];

  }
}

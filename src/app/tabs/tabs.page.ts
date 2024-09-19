import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}

}

import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CategoriesPage } from '../categories/categories';
import { NewsPage } from '../news/news';
import { RecommendationsPage } from '../recommendations/recommendations';
import { FavoritesPage } from '../favorites/favorites';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CategoriesPage;
  tab3Root = NewsPage;
  tab4Root = RecommendationsPage;
  tab5Root = FavoritesPage;
  tab6Root = ProfilePage;

  constructor() {}

}
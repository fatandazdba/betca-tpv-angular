import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdvancedSearchComponent} from './home/cashier-opened/advanced-search/advanced-search.component';
import {ArticlesComponent} from './home/articles/articles.component';
import {FamilySizesCreationComponent} from './home/cashier-opened/articles-family/family-sizes-creation.component';
import {ArticlesFamilyViewComponent} from './home/cashier-opened/articles-family/articles-family-view.component';
import {CashierClosedComponent} from './home/cashier-closed/cashier-closed.component';
import {CashierOpenedComponent} from './home/cashier-opened/cashier-opened.component';
import {CashMovementDialogComponent} from './home/cashier-opened/shared/cash-movement/cash-movement-dialog.component';
import {HomeComponent} from './home/home.component';
import {ShoppingCartComponent} from './home/cashier-opened/shopping-cart/shopping-cart.component';
import {UsersComponent} from './home/users/users.component';
import {ArticleQuickCreationDialogComponent} from './home/cashier-opened/shopping-cart/article-quick-creation-dialog.component';
import {CashierClosureDialogComponent} from './home/cashier-opened/cashier/cashier-closure-dialog.component';
import {CheckOutDialogComponent} from './home/cashier-opened/shopping-cart/check-out-dialog.component';
import {DbSeedDialogComponent} from './home/admins/db-seed-dialog.component';
import {WelcomeComponent} from './welcome.component';
import {LineChartComponent} from './core/line-chart.component';
import {ProvidersComponent} from './home/providers/providers.component';
import {ProfileDialogComponent} from './home/users/profile-dialog.component';
import {ArticlesFamiliesCRUDComponent} from './home/articles-families/articles-families.component';
import {OffersComponent} from './home/offers/offers.component';
import {StatisticComponent} from './home/stadistics/statistic.component';
import {StockPredictionComponent} from './home/stock-prediction/stock-prediction.component';
import {RolesDialogComponent} from './home/users/roles-dialog.component';
import {InvoiceUpdateComponent} from './home/invoice/invoice-update.component';
import {AdvancedQueryComponent} from './home/shared/advanced-query.component';
import {VouchersUseDialogComponent} from './home/vouchers/vouchersUse-dialog.component';
import {TicketsComponent} from './home/tickets/tickets.component';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: WelcomeComponent.URL},
  {path: WelcomeComponent.URL, component: WelcomeComponent},
  {
    path: HomeComponent.URL, component: HomeComponent,
    children: [
      {path: ArticlesComponent.URL, component: ArticlesComponent},
      {path: ArticlesFamiliesCRUDComponent.URL, component: ArticlesFamiliesCRUDComponent},
      {path: CashierClosedComponent.URL, component: CashierClosedComponent},
      {path: CashierOpenedComponent.URL, component: CashierOpenedComponent},
      {path: ProvidersComponent.URL, component: ProvidersComponent},
      {path: StatisticComponent.URL, component: StatisticComponent},
      {path: OffersComponent.URL, component: OffersComponent},
      {path: TicketsComponent.URL, component: TicketsComponent},
      {path: UsersComponent.URL, component: UsersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static COMPONENTS = [
    AdvancedSearchComponent,
    AdvancedQueryComponent,
    ArticlesComponent,
    ArticlesFamiliesCRUDComponent,
    ArticlesFamilyViewComponent,
    CashierClosedComponent,
    CashierOpenedComponent,
    HomeComponent,
    InvoiceUpdateComponent,
    LineChartComponent,
    ProvidersComponent,
    ShoppingCartComponent,
    StatisticComponent,
    StockPredictionComponent,
    TicketsComponent,
    UsersComponent,
    WelcomeComponent,
    OffersComponent
  ];

  static DIALOGS = [
    FamilySizesCreationComponent,
    ArticleQuickCreationDialogComponent,
    CashierClosureDialogComponent,
    CashMovementDialogComponent,
    CheckOutDialogComponent,
    DbSeedDialogComponent,
    ProfileDialogComponent,
    RolesDialogComponent,
    VouchersUseDialogComponent
  ];
}

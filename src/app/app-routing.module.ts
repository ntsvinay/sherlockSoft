import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {RetailComponent} from './retail/retail.component';
import {AutomotiveComponent} from './automotive/automotive.component';
import {PrivacyNoticeComponent} from './privacy-notice/privacy-notice.component';
const routes: Routes = [
{ path: '', redirectTo: 'home-page', pathMatch: 'full' },    
{path:'home-page',component:HomePageComponent},
{path:'retail',component:RetailComponent},
{path:'automotive',component:AutomotiveComponent},
{path:'privacy-notice',component:PrivacyNoticeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[HomePageComponent,RetailComponent,AutomotiveComponent,PrivacyNoticeComponent,]

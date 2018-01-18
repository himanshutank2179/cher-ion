import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MaintabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maintab',
  templateUrl: 'maintab.html'
})
export class MaintabPage {

  serviceRoot = 'ServicePage';
  staffRoot = 'StaffPage';
  usersRoot = 'UsersPage';
  dashboardRoot = 'DashboardPage';
  appointmentRoot = 'AppointmentPage';
  branchesRoot = 'BranchesPage';
  categoriesRoot = 'CategoriesPage';
  coupon = 'CouponPage';
  report = 'ReportPage';

  constructor(public navCtrl: NavController) {}

}

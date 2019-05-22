import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EduyotService } from '../../services/eduyot.service';
import { Community } from '../../services/model';
import { PlaybackListPage } from '../playback-list/playback-list';
import { ABOUT } from '../../services/data/about.data';

/**
 * Generated class for the CommunitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-communities',
  templateUrl: 'communities.html',
})
export class CommunitiesPage {
  public readMore = false;
  public about = ABOUT;

  constructor(public navCtrl: NavController, public navParams: NavParams, private eduyotService: EduyotService) {
  }

  ionViewDidLoad() {
  }

  get communities(): Array<Community> {
    return this.eduyotService.getCommunities();
  }

  get camps(): Array<Community> {
    return this.eduyotService.getCamps();
  }

  openCommunity(community: Community) {
    this.navCtrl.push(PlaybackListPage, {community: community});
  }

  doReadMore() {
    this.readMore = !this.readMore;
  }
}

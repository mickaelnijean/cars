import { Component, OnInit } from '@angular/core';
import { User } from './shared/model/user.model';
import { UserRepositoryService } from './shared/services/database/user-repository.service';
import { UserService } from './shared/services/store/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'entretien';

  constructor(public userStore: UserService,
              public userRepository: UserRepositoryService) {

  }

  ngOnInit() {
    this.userRepository.getAllUser().subscribe( (users: User[]) => {
      this.userStore.updateAllUser(users);
    });
  }

  updateCurrentUser(user: User): void {
    this.userStore.updateCurrentUser(user);
  }

}

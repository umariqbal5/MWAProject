import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
=======
<<<<<<< HEAD:FrontEnd/src/app/pages/UserList/UserList.component.spec.ts
import { UserListComponent } from './UserList.component';

describe('PackageListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ]
=======
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff
import { EditUserComponent } from './editUser.component';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserComponent ]
<<<<<<< HEAD
=======
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff:FrontEnd/src/app/pages/editUser/editUser.component.spec.ts
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD
    fixture = TestBed.createComponent(EditUserComponent);
=======
<<<<<<< HEAD:FrontEnd/src/app/pages/UserList/UserList.component.spec.ts
    fixture = TestBed.createComponent(UserListComponent);
=======
    fixture = TestBed.createComponent(EditUserComponent);
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff:FrontEnd/src/app/pages/editUser/editUser.component.spec.ts
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
